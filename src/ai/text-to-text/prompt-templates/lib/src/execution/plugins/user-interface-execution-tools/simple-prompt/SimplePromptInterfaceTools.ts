import { UserInterfaceTools, UserInterfaceToolsPromptDialogOptions } from '../../../UserInterfaceTools';

/**
 * Wrapper around `window.prompt` synchronous function that interacts with the user via browser prompt
 *
 * Warning: It is used for testing and mocking
 *          **NOT intended to use in the production** due to its synchronous nature.
 */
export class SimplePromptInterfaceTools implements UserInterfaceTools {
    /**
     * Trigger window.prompt dialog
     */
    public async promptDialog(options: UserInterfaceToolsPromptDialogOptions): Promise<string> {
        const answer = window.prompt(options.prompt);
        if (answer === null) {
            throw new Error('User cancelled prompt');
        }
        return answer;
    }
}
