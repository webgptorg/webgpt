/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_c7551116-1306-4d89-b90c-465a2d6bc13d-0_3.json';
import source from './Pavol_Hejn_a_retro_futuristic_wallpaper_featuring_a_vintage_ill_c7551116-1306-4d89-b90c-465a2d6bc13d-0_3.png';

/**
 * Image of A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro-futuristic wallpaper featuring a vintage illustration of a robot, set against a neon-colored background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroFuturisticWallpaperFeaturingAVintageIllC755111613064d89B90c465a2d6bc13d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#413456'),
    lightestColor: Color.fromHex('#ffffdd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff1111'), Color.fromHex('#00ddcc')],
    minmaxGreen: [Color.fromHex('#55cc44'), Color.fromHex('#ee0033')],
    minmaxBlue: [Color.fromHex('#1133aa'), Color.fromHex('#ffdd00')],
    mostFrequentColor: Color.fromHex('#222255'),
    mostSaturatedColor: Color.fromHex('#cc0055'),
    mostGroupedColor: Color.fromHex('#221144'),
    bottom: {
        averageColor: Color.fromHex('#26395c'),
        lightestColor: Color.fromHex('#ffffdd'),
        darkestColor: Color.fromHex('#220000'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#ff1111'), Color.fromHex('#00ddcc')],
        minmaxGreen: [Color.fromHex('#55cc44'), Color.fromHex('#ff1144')],
        minmaxBlue: [Color.fromHex('#002299'), Color.fromHex('#ffee22')],
        mostFrequentColor: Color.fromHex('#222255'),
        mostSaturatedColor: Color.fromHex('#004466'),
        mostGroupedColor: Color.fromHex('#222255'),
    },
} satisfies IImageColorStats;
