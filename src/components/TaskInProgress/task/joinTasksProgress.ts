import { TaskProgress } from './TaskProgress';

/**
 * Merges tasks with same name into one in array of tasks
 * Note: It depends on order
 *
 * @param tasksProgress Array of TaskProgress
 * @returns joined Array of TaskProgress
 */
export function joinTasksProgress(...tasksProgress: Array<TaskProgress>): Array<TaskProgress> {
    const joinedTasksProgress: Array<TaskProgress> = [];

    for (const newTaskProgress of tasksProgress) {
        const joinedTaskProgress = joinedTasksProgress.find(
            (taskProgress) => taskProgress.name === newTaskProgress.name,
        );

        if (!joinedTaskProgress) {
            if (!newTaskProgress.title) {
                throw new Error(`Missing title for task "${newTaskProgress.name}"`);
            }
            joinedTasksProgress.push(newTaskProgress);
            continue;
        } else {
            if (newTaskProgress.isDone) {
                joinedTaskProgress.isDone = true;
            }
            // TODO: Maybe do title update etc...
        }
    }

    return joinedTasksProgress;
}
