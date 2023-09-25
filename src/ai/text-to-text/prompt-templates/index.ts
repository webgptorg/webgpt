import writeWebsiteContentExecutorPtp from '../../../../prompts/templates/write-website-content.cs.lite.ptp.md';
import { isRunningInNode } from '../../../utils/isRunningInWhatever';
import { uuid } from '../../../utils/typeAliases';
import { ChatThread } from '../ChatThread';
import { completeWithGpt } from '../completeWithGpt';
import { PromptTemplatePipeline } from './lib/src/classes/PromptTemplatePipeline';
import { promptTemplatePipelineStringToJson } from './lib/src/conversion/promptTemplatePipelineStringToJson';
import { createPromptTemplatePipelineExecutor } from './lib/src/execution/createPromptTemplatePipelineExecutor';
import { PromptTemplatePipelineExecutor } from './lib/src/types/PromptTemplatePipelineExecutor';

interface writeWebsiteContentCsLiteEntryParams {
    assigment: string;
}

interface writeWebsiteContentCsLiteResultParams {
    contentBody: string;
}

/**
 * @@@
 *
 * @private
 */
let writeWebsiteContentExecutor: PromptTemplatePipelineExecutor<
    writeWebsiteContentCsLiteEntryParams,
    writeWebsiteContentCsLiteResultParams
> | null;

/**
 * @@@
 *
 * @private
 * /
async function importPtp(path: string_file_path): Promise<PromptTemplatePipelineString> {
    return (await readFile(join(__dirname, path), 'utf-8')) as PromptTemplatePipelineString;
}
*/

/**
 * !!!
 *
 * Note: The client is cached, so it's safe to call this function multiple times
 * Note: This function is available ONLY in server/node
 */
export async function writeWebsiteContentCs(
    entryParams: writeWebsiteContentCsLiteEntryParams,
): Promise<writeWebsiteContentCsLiteResultParams> {
    if (!writeWebsiteContentExecutor) {
        if (!isRunningInNode()) {
            throw new Error('Prompt template executors are only available on the server');
        }

        writeWebsiteContentExecutor = createPromptTemplatePipelineExecutor({
            promptTemplatePipeline: PromptTemplatePipeline.fromJson(
                promptTemplatePipelineStringToJson(
                    writeWebsiteContentExecutorPtp,
                    /*
                    await importPtp(
                        '../../../../prompts/templates/write-website-content.cs.ptp.md' /* <- TODO: !!! Pass to helper * /,
                    ),
                    */
                ),
            ),
            tools: {
                gpt: {
                    createChatThread: async (prompt) =>
                        ChatThread.ask(
                            prompt,
                            'aaaaaaaa-d669-414e-b066-e9733f0de7a8' /* <- TODO: !!! Pass here real UUID + Make some SYSTEM_UUID etc */ as uuid,
                        ),
                    completeWithGpt: async (prompt) =>
                        completeWithGpt(
                            prompt,
                            'aaaaaaaa-d669-414e-b066-e9733f0de7a8' /* <- TODO: !!! Pass here real UUID + Make some SYSTEM_UUID etc */ as uuid,
                        ),
                },
            },
        });
    }

    return /* not await */ writeWebsiteContentExecutor(entryParams);
}

/**
 * TODO: !!! Make helper
 * TODO: This should be auto-generated from the /prompts/templates/ folder
 */
