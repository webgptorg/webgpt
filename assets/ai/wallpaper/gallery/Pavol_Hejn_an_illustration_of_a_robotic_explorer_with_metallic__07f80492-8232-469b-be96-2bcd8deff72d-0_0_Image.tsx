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
import metadata from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_0.json';
import source from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_0.png';

/**
 * Image of An illustration of a robotic explorer, with metallic textures and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfARoboticExplorerWithMetallic7f804928232469bBe962bcd8deff72d00_0_Image(
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

AnIllustrationOfARoboticExplorerWithMetallic7f804928232469bBe962bcd8deff72d00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfARoboticExplorerWithMetallic7f804928232469bBe962bcd8deff72d00_0_Image.colorStats = {
    averageColor: Color.fromHex('#a79f91'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa6622'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#888844'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#ffffff'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#ffffff'),
    bottom: {
        averageColor: Color.fromHex('#9a9387'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#774411'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#666677'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#ffffff'),
        mostSaturatedColor: Color.fromHex('#221100'),
        mostGroupedColor: Color.fromHex('#ffffff'),
    },
} satisfies IImageColorStats;
