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
import metadata from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_3.json';
import source from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_3.png';

/**
 * Image of An illustration of a robotic explorer, with metallic textures and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a robotic explorer, with metallic textures and intricate details."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#3d534b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb6622'), Color.fromHex('#77ffff')],
    minmaxGreen: [Color.fromHex('#339966'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#1166aa'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#224444'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#66aa99'),
    bottom: {
        averageColor: Color.fromHex('#2f3b36'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995500'), Color.fromHex('#55ddee')],
        minmaxGreen: [Color.fromHex('#559977'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#224444'),
        mostSaturatedColor: Color.fromHex('#001111'),
        mostGroupedColor: Color.fromHex('#224444'),
    },
} satisfies IImageColorStats;
