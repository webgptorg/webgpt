import chalk from 'chalk';
import { Server, Socket } from 'socket.io';
import { OPENAI_API_KEY } from '../../../../../../../../../config';
import { OpenAiExecutionTools } from '../openai/OpenAiExecutionTools';
import { Ptps_Request } from './interfaces/Ptps_Request';
import { Ptps_Response } from './interfaces/Ptps_Response';

interface RemoteServerOptions {
    port: number;

    // TODO: isVerbose
}

export function createRemoteServer(options: RemoteServerOptions) {
    const { port } = options;

    const server: Server = new Server(port, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    server.on('connection', (socket: Socket) => {
        console.log(chalk.green(`Client connected: ${socket.id}`));

        socket.on('request', async (request: Ptps_Request) => {
            const { prompt, clientId } = request;
            // TODO: !! Validate here clientId (pass validator as dependency)
            console.log(chalk.green(`New request`), request);

            // TODO: !!! Execution tools should be passed as dependency
            const executionTools = new OpenAiExecutionTools(OPENAI_API_KEY!, clientId);

            // TODO: !!! Pass library as a dependency and check validity of the prompt
            // TODO: !!! Split here between completion and chat
            const promptResult = await executionTools.gptChat(prompt);

            socket.send('response', { promptResult } satisfies Ptps_Response);

            // TODO: !!! Also handle progress and errors
            // TODO: !! Disconnect after some timeout
        });

        socket.on('disconnect', () => {
            console.log(chalk.magenta(`Client disconnected: ${socket.id}`));
        });
    });

    console.log(chalk.bgGreen(`PTP server listening on port ${port}`));
}

/**
 * TODO: !!! Annotate
 * TODO: [🤹‍♂️] Do not hang up immediately but wait until client closes OR timeout
 * TODO: [🤹‍♂️] Timeout on chat to free up resources
 * TODO: [🃏] Pass here some security token to prevent DDoS
 */
