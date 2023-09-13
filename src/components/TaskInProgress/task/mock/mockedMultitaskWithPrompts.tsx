import { faker } from '@faker-js/faker';
import spaceTrim from 'spacetrim';
import { Promisable } from 'type-fest';
import { forTime } from 'waitasecond';
import { promptDialogue } from '../../../Dialogues/dialogues/promptDialogue';
import { TaskProgress } from '../TaskProgress';

export async function mockedMultitaskWithPrompts(
    onProgress: (taskProgress: TaskProgress) => Promisable<void>,
): Promise<void> {
    console.info(
        spaceTrim(`
            %cStart mockedMultitaskWithPrompts
            Note: This should be used only for development purposes.
        `), // <- TODO: Put only in one bracket
        spaceTrim(`
            display: block;
            background: #F1E314;
            border: 1px solid #7E7E7E;
            color: #000000;
            padding: 5px;
            border-radius: 3px;
        `),
    );

    for (let i = 0; i < 5; i++) {
        await forTime(Math.random() * 1000 + 500);

        const title = `(${i}) ${faker.hacker.verb()}`;

        await onProgress({
            name: `mocked-task-${i}`,
            title: <>{title}</>,
            isDone: false, // <- TODO: !!! Pause here in UI
        });

        const response = await promptDialogue(
            <>
                Question about <span style={{ fontStyle: 'italic' }}>{title}</span>
            </>,
        );

        await onProgress({
            name: `mocked-task-${i}`,
            title: (
                <>
                    {title} <i>({response})</i>
                </>
            ),
            isDone: true,
        });
    }
}

/**
 * TODO: Maybe reflect response from promptDialogue in UI (like in TaskProgress)
 */
