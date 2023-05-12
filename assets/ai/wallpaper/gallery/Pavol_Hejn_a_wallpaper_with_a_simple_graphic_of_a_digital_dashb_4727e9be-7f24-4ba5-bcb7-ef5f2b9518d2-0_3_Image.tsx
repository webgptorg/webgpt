/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/4727e9be-7f24-4ba5-bcb7-ef5f2b9518d2/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_dashb_4727e9be-7f24-4ba5-bcb7-ef5f2b9518d2-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_dashb_4727e9be-7f24-4ba5-bcb7-ef5f2b9518d2-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_dashb_4727e9be-7f24-4ba5-bcb7-ef5f2b9518d2-0_3.texts.json';

/**
 * Image of A wallpaper with a simple graphic of a digital dashboard or control panel, with space for monitoring and managing data.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfADigitalDashb4727e9be7f244ba5Bcb7Ef5f2b9518d20_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a digital dashboard or control panel, with space for monitoring and managing data."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfADigitalDashb4727e9be7f244ba5Bcb7Ef5f2b9518d20_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfADigitalDashb4727e9be7f244ba5Bcb7Ef5f2b9518d20_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfADigitalDashb4727e9be7f244ba5Bcb7Ef5f2b9518d20_3_Image.texts =
    texts satisfies IWallpaperTexts;
