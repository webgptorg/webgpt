import type { TaskProgress } from '../TaskProgress';

/**
 * Just an list of miscellaneous (im)possible tasks
 *
 * @private do not use outside of this folder, use one of mock... functions instead
 */
export const MOCKED_TASKS_PROGRESS_QUEUE: Array<TaskProgress> = [
    {
        name: 'image-analysis',
        title: 'Analyzing image (1)',
        isDone: false,
    },
    {
        name: 'text-analysis',
        title: 'Analyzing text (2)',
        isDone: false,
    },
    {
        name: 'image-analysis',
        isDone: true,
    },
    {
        name: 'voice-analysis',
        title: 'Analyzing voice (3)',
        isDone: true,
    },
    {
        name: 'text-analysis',
        title: (
            <>
                Analyzing <i>newsletter</i> text (2)
            </>
        ),
        isDone: true,
    },
    {
        name: '4',
        title: 'Something (4)',
        isDone: false,
    },
    {
        name: '5',
        title: 'Something else (5)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different A (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different B (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different C (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different D (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different E (6)',
        isDone: false,
    },
    {
        name: '6',
        title: 'Something different F (6)',
        isDone: true,
    },
];
