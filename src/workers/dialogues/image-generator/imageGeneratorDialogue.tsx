import { makeDialogueFunction } from '../../lib/dialogues/makeDialogueFunction';
import { ImageGeneratorDialogueComponent } from './component/ImageGeneratorDialogueComponent';
import { ImageGeneratorDialogueRequest } from './interfaces/ImageGeneratorDialogueRequest';
import { ImageGeneratorDialogueResponse } from './interfaces/ImageGeneratorDialogueResponse';

/**
 * TODO: !!! Annotate
 */
export const imageGeneratorDialogue = makeDialogueFunction<
    ImageGeneratorDialogueRequest,
    ImageGeneratorDialogueResponse
>(ImageGeneratorDialogueComponent);
