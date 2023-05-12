/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/78dce83f-417d-4eed-a3a6-9457500fde06/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_78dce83f-417d-4eed-a3a6-9457500fde06-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_78dce83f-417d-4eed-a3a6-9457500fde06-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_virtual_assis_78dce83f-417d-4eed-a3a6-9457500fde06-0_1.texts.json';

/**
 * Image of A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a virtual assistant or chatbot, with space for messages and alerts, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfAVirtualAssis78dce83f417d4eedA3a69457500fde060_1_Image.texts =
    texts satisfies IWallpaperTexts;
