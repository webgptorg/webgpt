import { spaceTrim } from 'spacetrim';
import { FONTS } from '../../../config';
import { parseTitleAndTopic } from '../../utils/content/parseTitleAndTopic';
import { removeQuotes } from '../../utils/content/removeQuotes';
import { randomItem } from '../../utils/randomItem';
import { description, string_markdown, string_name, string_url, title, uuid } from '../../utils/typeAliases';
import { ChatThread } from './ChatThread';
import { completeWithGpt } from './completeWithGpt';
import { createTitlePromptTemplate } from './prompt-templates/createTitlePromptTemplate';

export interface WriteWallpaperContentOptions {
    /**
     * Client ID to validate the request
     */
    clientId: uuid /* <-[🌺] */;

    /**
     * Title of the wallpaper
     *
     * If set, the generated content will start with this title
     * If null, it will be written by AI
     */
    title: Exclude<title, JSX.Element> | null;

    /**
     * Assigment of the wallpaper
     *
     * It is the detailed description of the wallpaper, please include information like:
     * - What is the page about
     * - What is the goal of the page
     * - What is the user supposed to do on the page
     *
     * Note: There are two simmilar propertie:
     * - `description` which describes content of the image
     * - `assigment` which describes requirements for the page
     */
    assigment: Exclude<description, JSX.Element> | null;

    /**
     * Additional sections to be added to the content
     */
    addSections: Array<{
        /**
         * Unique name of the section
         * Note: It is used for example as element ID to lead anchor links to this section
         */
        name: string_name;

        /**
         * Title of the section
         */
        title: Exclude<title, JSX.Element>;

        /**
         * Order of the section
         * TODO: [🧠] Some transparent system to order sections
         */
        order: number;

        /**
         * Content of the section
         */
        content: string_markdown;

        // <- TODO: !! [🧠] Maybe allow to have empty name+title+content just write assigment and auto generate
    }>;

    /**
     * Links to be added to the content
     */
    links: Array<{
        /**
         * Title of the link - it is used as link text and also as title attribute
         */
        title: Exclude<title, JSX.Element>;

        /**
         * URL of the link
         */
        url: string_url;
    }>;
}

/**
 * Writes the rich content of the wallpaper page
 *
 * Note: This function is aviable only on the server
 *
 * @param wallpaperAssigment as a plain description what is on the wallpaper (created for expample from imageToText or midjourney prompt)
 * @returns Content of the wallpaper page
 */
export async function writeWallpaperContent(options: WriteWallpaperContentOptions): Promise<string_markdown> {
    const { clientId, assigment, addSections, links } = options;
    let { title } = options;

    let contentStart: string_markdown = '';

    if (title !== null) {
        contentStart = spaceTrim(
            (block) => `
    
                # ${block(title!)}
                
    
            `,
        );
    } else {
        if (!assigment) {
            throw new Error('Either title or assigment must be provided');
        }
        const prompt = createTitlePromptTemplate(assigment);
        const chatThread = await ChatThread.ask(prompt, clientId);
        const { response } = chatThread;
        const { title, topic } = parseTitleAndTopic(removeQuotes(response));

        contentStart = spaceTrim(
            (block) => `
    
                # ${block(title)}
                ${block(!topic ? `` : `\n\n> ${topic}\n\n`)}
    
            `,
        );
    }

    // TODO: !!! Use here addSections and links

    const { response: contentMiddle, model: modelToCreateContent } = await completeWithGpt(
        spaceTrim(
            // TODO: [🤡] This prompt should be also created in some template function
            // TODO: [🤡] Pefect this prompt
            (block) => `

                Following is markdown content of a webpage:

                ${block(contentStart)}
        
            `,
        ),
        clientId,
    );

    /*
     TODO: !!! Better
    const chatThreadFont = await chatThread.ask(createFontPromptTemplate());
    const font = removeQuotes(chatThreadFont.response) as string_font_family;
    */

    const font = randomItem(...FONTS);

    return spaceTrim(
        (block) => `
    
            <!--font:${font}-->

            ${block(contentStart)}
            ${block(contentMiddle)}
        
        `,
    );
}

/**
 * TODO: !! Put step by step instructions how the content is generated in footer comment
 * TODO: [👸] Use in generate-wallpapers-content and DRY
 * TODO: [👮‍♀️] In this repository is used both 'chatgpt' and 'openai' NPM packages - use just 'openai' in future and in scripts use the common utils
 * TODO: Make IWriteWallpaperContentOptions
 */
