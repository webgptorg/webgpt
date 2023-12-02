import type { Signal } from '@preact/signals-react';
import { signal } from '@preact/signals-react';
import type { DialogueRequestInQueue } from './interfaces/DialogueRequestInQueue';

/**
 * Queue of dialogues that are waiting for an response
 *
 * @private Use only withing the folder Dialogues
 */
export const dialoguesQueue: Signal<Array<DialogueRequestInQueue>> = signal([]);
