/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/17ba18a7-947b-49f0-b952-3c5ccc2045b9/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_17ba18a7-947b-49f0-b952-3c5ccc2045b9-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_17ba18a7-947b-49f0-b952-3c5ccc2045b9-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_17ba18a7-947b-49f0-b952-3c5ccc2045b9-0_0.texts.json';

/**
 * Image of A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAVirtualAssis17ba18a7947b49f0B9523c5ccc2045b90_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAVirtualAssis17ba18a7947b49f0B9523c5ccc2045b90_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAVirtualAssis17ba18a7947b49f0B9523c5ccc2045b90_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfAVirtualAssis17ba18a7947b49f0B9523c5ccc2045b90_0_Image.texts =
    texts satisfies IWallpaperTexts;
