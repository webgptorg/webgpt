import { string_prompt, string_template } from '../../../../../../utils/typeAliases';
import { ModelRequirements } from '../types/ModelRequirements';
import { Prompt } from '../types/Prompt';
import { PromptTemplateParams } from '../types/PromptTemplateParams';
import { replaceParams } from '../utils/replaceParams';

export class PromptTemplate<TEntryParams extends PromptTemplateParams, TResultParams extends PromptTemplateParams> {
    public constructor(
        private readonly source: string_prompt & string_template /* <- TODO: Just one helper type */,
        public readonly modelRequirements: ModelRequirements,
    ) {}

    writePrompt(params: PromptTemplateParams): Prompt {
        return {
            request: replaceParams(this.source, params),
            modelRequirements: this.modelRequirements,
        };
    }
}
