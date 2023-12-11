import { isRunningInNode } from '../isRunningInWhatever';
import type { IsClientVerifiedRequest, IsClientVerifiedResult } from './isClientVerified.types';

/**
 * Function isClientVerified checks if client has verified email
 *
 * Note: This function has version both for browser and server
 */
export async function $isClientVerifiedForServer(options: IsClientVerifiedRequest): Promise<IsClientVerifiedResult> {
    if (!isRunningInNode()) {
        throw new Error(
            'Function `$isClientVerified` can not be used in browser or worker, use browser version instead.',
        );
    }
}

/**
 * TODO: [🌯] Create some system (simmilar to Workerify) which can create server functions exposed in client through API in some DRY way
 * TODO: !!! Implement
 * TODO: !!!last Annotate
 */
