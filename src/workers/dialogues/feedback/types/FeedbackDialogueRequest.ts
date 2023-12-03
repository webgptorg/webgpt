import type { LikedStatus } from '../../../../utils/hooks/useLikedStatusOfCurrentWallpaper';
import type { message } from '../../../../utils/typeAliases';
import type { AbstractDialogueRequest } from '../../../lib/dialogues/interfaces/AbstractDialogueRequest';

export type FeedbackDialogueRequest = AbstractDialogueRequest & {
    /**
     * Feedback message
     * Sentence about is being feedbacked?
     *
     * @example "Give us feedback about the proposed title"
     */
    readonly message: message;

    /**
     * The subject of the feedback
     * What is being feedbacked?
     *
     * @example "proposed title"
     */
    readonly subject: string;

    /**
     * Default value for the likedStatus
     *
     * If you don’t want to set the default value use "NONE"
     */
    readonly defaultLikedStatus: keyof typeof LikedStatus;

    /**
     * Default value for the note
     */
    readonly defaultNote: string | null;

    /**
     * Placeholder for the note
     */
    readonly notePlaceholder?: string;
};

/**
 * Note: [🤽‍♀️]
 */
