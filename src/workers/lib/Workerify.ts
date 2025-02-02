import { WebgptTaskProgress } from '../../components/TaskInProgress/task/WebgptTaskProgress';
import { isRunningInBrowser, isRunningInWebWorker } from '../../utils/isRunningInWhatever';
import type { IMessageDialogueResponse } from './interfaces/IMessageDialogueResponse';
import type { IMessageError } from './interfaces/IMessageError';
import type { IMessageMainToWorker } from './interfaces/IMessageMainToWorker';
import type { IMessageProgress } from './interfaces/IMessageProgress';
import type { IMessageRequest } from './interfaces/IMessageRequest';
import type { IMessageResult } from './interfaces/IMessageResult';
import type { IMessageWorkerToMain } from './interfaces/IMessageWorkerToMain';
import type { IWorkerifyableFunction } from './interfaces/IWorkerifyableFunction';
import type { TransferableObject } from './interfaces/TransferableObject';
import type { WorkerifyOptions } from './interfaces/WorkerifyOptions';

/**
 * Utility helper for async running functions in workers
 */
export class Workerify<
    TRequest extends TransferableObject,
    TResult extends TransferableObject,
    TFunction = IWorkerifyableFunction<TRequest, TResult>,
> {
    public constructor(private readonly options: WorkerifyOptions) {}

    /**
     * Runs a worker for given function
     *
     * @param func an executor function that will be run in worker
     */
    public runWorker(executor: TFunction): void {
        if (!isRunningInWebWorker()) {
            throw new Error('You can access worker executor only in worker');
        }

        addEventListener('message', async (event: MessageEvent<IMessageMainToWorker<TRequest>>) => {
            const { type } = event.data;

            console.info('Worker: ⚙ Message from main thread', { type, event, executor });

            // console.log('⚙ Received request from main thread', { request, event, executor });
            if (type === 'REQUEST') {
                const { request } = event.data;

                try {
                    const result = (await (executor as any)(/* <-[0] */ request, (taskProgress: WebgptTaskProgress) => {
                        postMessage({
                            type: 'PROGRESS',
                            taskProgress,
                        } satisfies IMessageProgress);
                    })) as TResult; /* <-[0] */

                    postMessage({
                        type: 'RESULT',
                        result,
                    } satisfies IMessageResult<TResult>);
                } catch (error) {
                    if (!(error instanceof Error)) {
                        throw error;
                    }

                    console.error(error);
                    postMessage({
                        type: 'ERROR',
                        message: error.message,
                    } satisfies IMessageError);
                } finally {
                    self.close();
                }
            } else if (type.endsWith('_DIALOGUE_RESPONSE')) {
                // Note: [👂] Do nothing here, because some dialogue function listens alongside with this listener
                return;
            } else {
                throw new Error(`Unexpected message type from main thread: ${type}`);
            }
        });
    }

    /**
     * Makes a connector function that runs a worker for given function
     * Note: At the end, worker is terminated
     *
     * @param createWorker Callback that creates a worker (needs to be passed as callback, not as string, because Worker logic is optimized by bundlers so there mus be explicit new Worker(...) call)
     * @returns Function that externally behaves like executor function, but internally it runs a worker
     */
    public makeConnectorForBrowser(createWorker: () => Worker): TFunction {
        const connector = (
            request: TRequest,
            onProgress: (taskProgress: WebgptTaskProgress) => void = () => {},
        ): Promise<TResult> => {
            if (!isRunningInBrowser()) {
                throw new Error('You can access worker connector only in browser');
            }

            onProgress({
                // TODO: Maybe remove this task OR optionally turn it on/off
                // TODO: [🧠][🚔] DEFAULT_STARTING_TASK
                name: 'start-worker',
                title: 'Spinning up',
                isDone: false,
            });

            const worker = createWorker();

            // TODO: [🔮]> const unsavedChanges = PreventUnsavedChangesManager.work('Creating new wallpaper');
            window.onbeforeunload = () => {
                return 'You have unsaved changes. Are you sure you want to leave?';
                //     <- Note: There is no way how to pass reliably own message in todays browsers
            };

            const result = new Promise<TResult>((resolve, reject) => {
                worker.addEventListener('message', async (event: MessageEvent<IMessageWorkerToMain<TResult>>) => {
                    const { type } = event.data;

                    console.info('⚙ Message from worker', { type, event });

                    onProgress({
                        // Note: If recieved any message from worker, it means that worker is running
                        name: 'start-worker',
                        isDone: true,
                    });

                    if (type === 'RESULT') {
                        const { result } = event.data;
                        resolve(result);
                    } else if (type === 'PROGRESS') {
                        const { taskProgress } = event.data;
                        // Note: There is no point of awating onProgress, because it is running in worker
                        /*     > not await */ onProgress(taskProgress);
                    } else if (type === 'ERROR') {
                        const { message } = event.data;
                        reject(new Error(message));
                    } else if (type.endsWith('_DIALOGUE_REQUEST')) {
                        const { request, id } = event.data;
                        const dialogueTypeName = type.replace(/_DIALOGUE_REQUEST$/, '');

                        const dialogueFunction = this.options.supportDialogues.find(
                            (dialogueFunction) => dialogueFunction.dialogueTypeName === dialogueTypeName,
                        );

                        if (!dialogueFunction) {
                            throw new Error(
                                `Workerify does not support dialogue "${dialogueTypeName}", did you forget to add it to options.supportDialogues?`,
                            );
                        }

                        const response = await dialogueFunction(request);
                        worker!.postMessage({
                            type: `${dialogueTypeName}_DIALOGUE_RESPONSE`,
                            id,
                            response,
                        } satisfies IMessageDialogueResponse);
                    } else {
                        reject(new Error(`Unexpected message type from worker: ${type}`));
                    }
                });

                // console.info('⚙ Sending request to worker', { request, worker });

                worker!.postMessage({
                    type: 'REQUEST',
                    request,
                } satisfies IMessageRequest<TRequest>);
            });

            result.finally(() => {
                worker.terminate();

                // TODO: [🔮]> unsavedChanges.destroy();
                window.onbeforeunload = null;
            });

            return result;
        };

        return connector as TFunction /* <-[0] */;
    }
}

/**
 * TODO: [🌴] There is not ideally separated responsibilities between Workerify and dialogues - Either Workerify should not know about dialogues OR dialogues should not know about Workerify
 * TODO: Maybe add unique id for each request
 * TODO: Maybe add specific string for each function into messages IMessageRequest, IMessageProgress, IMessageResult, IMessageError
 * TODO: [0] Remove "as ..." and "any" the code should be type safe by itself without any ugly casts
 */
