import spaceTrim from 'spacetrim';
import {
    COLORSTATS_DEFAULT_COMPUTE_IN_FRONTEND,
    WALLPAPER_IMAGE_ASPECT_RATIO_ALLOWED_RANGE,
    WALLPAPER_IMAGE_MAX_ALLOWED_SIZE,
} from '../../../config';
import { getPtpToolsForWorker } from '../../ai/text-to-text/prompt-templates/getPtpToolsForWorker';
import { ptpLibrary } from '../../ai/text-to-text/prompt-templates/ptpLibrary';
import { promptDialogue } from '../../components/Dialogues/dialogues/promptDialogue';
import { TaskProgress } from '../../components/TaskInProgress/task/TaskProgress';
import { UploadWallpaperResponse } from '../../pages/api/custom/upload-wallpaper-image';
import type { WriteWallpaperPromptResponse } from '../../pages/api/custom/write-wallpaper-prompt';
import { addWallpaperComputables } from '../../utils/addWallpaperComputables';
import { aspectRatioRangeExplain } from '../../utils/aspect-ratio/aspectRatioRangeExplain';
import { downscaleWithAspectRatio } from '../../utils/aspect-ratio/downscaleWithAspectRatio';
import { isInAspectRatioRange } from '../../utils/aspect-ratio/isInAspectRatioRange';
import { serializeWallpaper } from '../../utils/hydrateWallpaper';
import { createImageInWorker } from '../../utils/image/createImageInWorker';
import { measureImageBlob } from '../../utils/image/measureImageBlob';
import { resizeImageBlob } from '../../utils/image/resizeImageBlob';
import { getSupabaseForWorker } from '../../utils/supabase/getSupabaseForWorker';
import {
    description,
    string_markdown,
    string_name,
    string_url,
    string_wallpaper_id,
    title,
    uuid,
} from '../../utils/typeAliases';

export interface ICreateNewWallpaperRequest {
    /**
     * Title of the wallpaper
     *
     * If set, the generated content will start with this title
     * If null, it will be written by AI
     */
    readonly title: Exclude<title, JSX.Element> | null;

    /**
     * Author of the wallpaper
     * Note: It must be valid client ID and same as identity of the user
     */
    readonly author: uuid;

    /**
     * Image of the wallpaper
     */
    readonly wallpaperImage: Blob;

    /**
     * Description of the wallpaper
     * It can be:
     * - **prompt** from MidJouener
     * - **alt** text
     * - **null**, in that case it will be generated by AI
     *
     * Note: There are two simmilar properties, provide only one of them:
     * - `description` which describes content of the image
     * - `assigment` which describes requirements for the page
     */
    readonly description: Exclude<description, JSX.Element> | null;

    /**
     * Assigment of the wallpaper
     *
     * It is the detailed description of the wallpaper, please include information like:
     * - What is the page about
     * - What is the goal of the page
     * - What is the user supposed to do on the page
     *
     * Note: There are two simmilar properties, provide only one of them:
     * - `description` which describes content of the image
     * - `assigment` which describes requirements for the page
     */
    readonly assigment?: Exclude<description, JSX.Element> | null;

    /**
     * Additional sections to be added to the content
     */
    readonly addSections: Array<{
        /**
         * Unique name of the section
         * Note: It is used for example as element ID to lead anchor links to this section
         */
        readonly name: string_name;

        /**
         * Title of the section
         */
        readonly title: Exclude<title, JSX.Element>;

        /**
         * Order of the section
         * TODO: [🧠] Some transparent system to order sections
         */
        readonly order: number;

        /**
         * Content of the section
         */
        readonly content: string_markdown;

        // <- TODO: !! [🧠] Maybe allow to have empty name+title+content just write assigment and auto generate
    }>;

    /**
     * Links to be added to the content
     */
    readonly links: Array<{
        /**
         * Title of the link - it is used as link text and also as title attribute
         */
        readonly title: Exclude<title, JSX.Element>;

        /**
         * URL of the link
         */
        readonly url: string_url;
    }>;
}

export interface ICreateNewWallpaperResult {
    readonly wallpaperId: string_wallpaper_id;
}

/**
 * Create a new wallpaper
 *
 * @workerify Do not use directly, use createNewWallpaperForBrowser instead
 * @private Use only withing the folder createNewWallpaper
 */
export async function createNewWallpaper(
    request: ICreateNewWallpaperRequest,
    onProgress: (taskProgress: TaskProgress) => void,
): Promise<ICreateNewWallpaperResult> {
    const { title, author, wallpaperImage: wallpaper, links, addSections } = request;
    let { description } = request;
    const computeColorstats = COLORSTATS_DEFAULT_COMPUTE_IN_FRONTEND;

    //===========================================================================
    //-------[ Image analysis and check: ]---
    await onProgress({
        name: 'image-check',
        title: 'Checking image',
        isDone: false,
    });

    /*
    Note: This is not needed because it is already checked by the measureImageBlob etc... Implement only if we want nicer error message
    if (!wallpaper.type.startsWith('image/')) {
        // TODO: [🈵] If 4XX error, show also the message from json body
        throw new Error(`File is not an image`);
    }
    */

    const originalSize = await measureImageBlob(wallpaper);
    let naturalSize = originalSize.clone();

    // Note: Checking first fatal problems then warnings and fixable problems (like too large image fixable by automatic resize)

    if (!isInAspectRatioRange(WALLPAPER_IMAGE_ASPECT_RATIO_ALLOWED_RANGE, originalSize)) {
        throw new Error(
            spaceTrim(
                (block) => `
                    Image has aspect ratio that is not allowed:

                    ${block(aspectRatioRangeExplain(WALLPAPER_IMAGE_ASPECT_RATIO_ALLOWED_RANGE, originalSize))}
                `,
            ),
        );
    }

    if (originalSize.x > WALLPAPER_IMAGE_MAX_ALLOWED_SIZE.x || originalSize.y > WALLPAPER_IMAGE_MAX_ALLOWED_SIZE.y) {
        naturalSize = downscaleWithAspectRatio(originalSize, WALLPAPER_IMAGE_MAX_ALLOWED_SIZE);
    }

    await onProgress({
        name: 'image-check',
        isDone: true,
    });

    //-------[ / Image analysis and check ]---
    //===========================================================================
    //-------[ Image resize: ]---
    await onProgress({
        name: 'image-resize',
        title: 'Resizing image',
        isDone: false,
    });

    const wallpaperForUpload = await resizeImageBlob(wallpaper, naturalSize);
    const wallpaperForColorAnalysis = await resizeImageBlob(
        wallpaper,
        downscaleWithAspectRatio(naturalSize, computeColorstats.preferredSize),
    );

    await onProgress({
        name: 'image-resize',
        isDone: true,
    });
    //-------[ / Image resize ]---
    //===========================================================================
    //-------[ Color analysis: ]---

    const colorStatsPromise = /* not await */ createImageInWorker(wallpaperForColorAnalysis).then(
        (imageForColorAnalysis) =>
            computeColorstats(
                imageForColorAnalysis,
                onProgress /* <- Note: computeColorstats will show its own tasks */,
            ),
    );
    //-------[ / Color analysis ]---
    //===========================================================================
    //-------[ Upload image: ]---
    await onProgress({
        name: 'upload-wallpaper-image',
        title: 'Uploading image',
        isDone: false,
        // TODO: Make it more granular
    });
    const formData = new FormData();
    formData.append('wallpaper', wallpaperForUpload);

    const response1 /* <-[💩] */ = await fetch('/api/custom/upload-wallpaper-image', {
        method: 'POST',
        body: formData,
    });

    if (response1.ok === false) {
        throw new Error(`Upload wallpaper failed with status ${response1.status}`);
    }

    const { wallpaperUrl } = (await response1.json()) as UploadWallpaperResponse;
    await onProgress({
        name: 'upload-wallpaper-image',
        isDone: true,
    });
    console.info({ wallpaperUrl });
    //-------[ /Upload image ]---
    //===========================================================================

    //-------[ Write description: ]---

    if (!description) {
        await onProgress({
            name: 'write-wallpaper-prompt',
            title: 'Content analysis',
            isDone: false,
            // TODO: Make it more granular
        });

        const response2 /* <-[💩] */ = await fetch('/api/custom/write-wallpaper-prompt', {
            method: 'POST',
            body: JSON.stringify({ wallpaperUrl }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (response2.ok === false) {
            // TODO: [🈵] If 4XX error, show also the message from json body
            throw new Error(`Content analysis failed with status ${response2.status}`);
        }

        const { wallpaperDescription } = (await response2.json()) as WriteWallpaperPromptResponse;
        description = wallpaperDescription;

        console.info({ description });
        await onProgress({
            name: 'write-wallpaper-prompt',
            isDone: true,
        });
    }

    //-------[ /Write description ]---
    //===========================================================================
    //-------[ Modify Web Assigment: ]---

    // TODO: [🧠] !! Wording: Assigment, Description, Prompt, biography | Make string_semantics for each of them
    // TODO: Should be here onProgress task?
    // TODO: !!! Remove from here and put to PTP
    const answer = await promptDialogue({
        prompt: `What is your web about?`,
        defaultValue: description,
        placeholder: `Describe your web` /* <- TODO: Better and maybe with rotation */,
    });
    if (answer === null) {
        // TODO: Retry automatically (maybe with taskify)
        throw new Error(`You must write at least some description of your web`);
    }

    const assigment = answer;
    console.info({ wallpaperAssigment: assigment });
    //-------[ /Modify Web Assigment ]---

    //===========================================================================
    //-------[ Write content: ]---
    await onProgress({
        name: 'write-wallpaper-content',
        title: 'Copywriting',
        isDone: false,
        // TODO: Make it more granular
    });

    const { contentBody, keywords, enhancedTitle, claim } = await ptpLibrary.createExecutor(
        'writeWebsiteContent',
        getPtpToolsForWorker(author),
    )(
        {
            title,
            assigment,
            links,
            addSections,
        },
        onProgress,
    );

    const wallpaperContent = spaceTrim(
        (block) => `

            # ${block(enhancedTitle)}

            > ${block(claim)}

            ${block(contentBody)}
        
        
        `,
    );

    await onProgress({
        name: 'write-wallpaper-content',
        isDone: true,
    });

    console.info({ wallpaperContent, contentBody, keywords, enhancedTitle, claim });
    //-------[ /Write content ]---
    //===========================================================================
    //-------[ Save: ]---
    await onProgress({
        name: 'finishing',
        title: 'Finishing',
        isDone: false,
        // Note: No need to end this task, because it is the last one and will be ended by navigation to new page
    });
    const newWallpaper = addWallpaperComputables({
        parent: null,
        author,
        isPublic: false,
        src: wallpaperUrl,
        prompt: description,
        colorStats: await colorStatsPromise,
        naturalSize: originalSize,
        content: wallpaperContent,
        saveStage: 'SAVING',
    });

    const insertResult = await getSupabaseForWorker().from('Wallpaper').insert(serializeWallpaper(newWallpaper));

    // TODO: !! Util isInsertSuccessfull (status===201)
    console.info({ newWallpaper, insertResult });
    //-------[ /Save ]---
    //===========================================================================

    return { wallpaperId: newWallpaper.id };
}

/**
 * TODO: [🥩] Make version just without prompting
 * TODO: !! Save wallpaperDescription in wallpaper (and maybe whole Azure response)
 * TODO: This function should not know anything that she runs in a worker (getSupabaseForWorker)
 * TODO: `author` must be valid client ID and same as `clientId`
 */
