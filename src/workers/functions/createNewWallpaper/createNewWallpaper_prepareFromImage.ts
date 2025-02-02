import { TaskProgress } from '@promptbook/types';
import { WebgptTaskProgress } from '../../../components/TaskInProgress/task/WebgptTaskProgress';
import { createNewWallpaper_image } from './createNewWallpaper_image';
import { createNewWallpaper_text } from './createNewWallpaper_text';
import type { CreateNewWallpaperPrepareResult } from './interfaces/CreateNewWallpaperPrepareResult';
import type { CreateNewWallpaperRequest } from './interfaces/CreateNewWallpaperRequest';

/**
 * Create new wallpaper in situation when user provided image but not text or idea
 *
 * @private Use ONLY in createNewWallpaper
 */
export async function createNewWallpaper_prepareFromImage(
    request: CreateNewWallpaperRequest,
    onProgress: (taskProgress: WebgptTaskProgress) => void,
): Promise<CreateNewWallpaperPrepareResult> {
    const { author, wallpaperImage, locale, title, idea, links, addSections } = request;

    if (!wallpaperImage) {
        throw new Error('wallpaperImage must be provided');
        //               <- TODO: [👮‍♂️] Maybe constrain this logic into CreateNewWallpaperRequest
        //               <- TODO: ShouldNeverHappenError
    }

    const { wallpaperUrl, originalSize, colorStats } = await createNewWallpaper_image(
        { author, wallpaperImage },
        onProgress,
    );
    const { contentWithFont } = await createNewWallpaper_text(
        {
            locale,
            title,
            idea,
            author,
            links,
            addSections,
        },
        (taskProgress: TaskProgress) => {
            // TODO: [⛵] DRY
            const isProgressLoggedForCurrentTemplate = taskProgress.executionType === 'PROMPT_TEMPLATE';

            if (isProgressLoggedForCurrentTemplate) {
                onProgress(taskProgress);
            }
        },
    );

    return {
        wallpaperUrl,
        colorStats,
        originalSize,
        contentWithFont,
        wallpaperPrompt: '!!' /* <- TODO: [🚿] Pass here the original or normalized prompt */,
    };
}
