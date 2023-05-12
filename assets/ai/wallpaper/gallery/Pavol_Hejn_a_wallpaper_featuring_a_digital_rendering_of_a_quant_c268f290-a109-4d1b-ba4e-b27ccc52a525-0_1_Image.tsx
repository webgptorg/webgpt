/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/c268f290-a109-4d1b-ba4e-b27ccc52a525/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_c268f290-a109-4d1b-ba4e-b27ccc52a525-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_c268f290-a109-4d1b-ba4e-b27ccc52a525-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_digital_rendering_of_a_quant_c268f290-a109-4d1b-ba4e-b27ccc52a525-0_1.texts.json';

/**
 * Image of A wallpaper featuring a digital rendering of a quantum computer, with a minimalist color scheme and geometric lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a digital rendering of a quantum computer, with a minimalist color scheme and geometric lines."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingADigitalRenderingOfAQuantC268f290A1094d1bBa4eB27ccc52a5250_1_Image.texts =
    texts satisfies IWallpaperTexts;
