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
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_6fe56b8b-054d-4c2a-a84f-29e37be59e99-0_3.json';
import source from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_6fe56b8b-054d-4c2a-a84f-29e37be59e99-0_3.png';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWit6fe56b8b054d4c2aA84f29e37be59e990_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfALavaFlowOnAVolcanicPlanetWit6fe56b8b054d4c2aA84f29e37be59e990_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWit6fe56b8b054d4c2aA84f29e37be59e990_3_Image.colorStats = {
    averageColor: Color.fromHex('#3a1e20'),
    lightestColor: Color.fromHex('#ffaa88'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffcc88'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#ffcc88')],
    minmaxGreen: [Color.fromHex('#555544'), Color.fromHex('#ff2200')],
    minmaxBlue: [Color.fromHex('#444455'), Color.fromHex('#ffbb11')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#321315'),
        lightestColor: Color.fromHex('#ff8866'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ff8866'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1100'), Color.fromHex('#001111')],
        minmaxGreen: [Color.fromHex('#775544'), Color.fromHex('#ff2200')],
        minmaxBlue: [Color.fromHex('#333344'), Color.fromHex('#ff7711')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
