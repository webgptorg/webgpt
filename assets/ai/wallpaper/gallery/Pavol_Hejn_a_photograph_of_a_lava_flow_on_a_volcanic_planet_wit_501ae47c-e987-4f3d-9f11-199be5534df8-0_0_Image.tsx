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
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_0.json';
import source from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_0.png';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_0_Image(
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

APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_0_Image.colorStats = {
    averageColor: Color.fromHex('#45252a'),
    lightestColor: Color.fromHex('#ffbbdd'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffddbb'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ee0000'), Color.fromHex('#ffddbb')],
    minmaxGreen: [Color.fromHex('#556666'), Color.fromHex('#ee0011')],
    minmaxBlue: [Color.fromHex('#442255'), Color.fromHex('#ffcc00')],
    mostFrequentColor: Color.fromHex('#001111'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#3a1e20'),
        lightestColor: Color.fromHex('#ff7777'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffcc77'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0011'), Color.fromHex('#ffcc77')],
        minmaxGreen: [Color.fromHex('#666666'), Color.fromHex('#ee0011')],
        minmaxBlue: [Color.fromHex('#553355'), Color.fromHex('#ffbb11')],
        mostFrequentColor: Color.fromHex('#001111'),
        mostSaturatedColor: Color.fromHex('#000011'),
        mostGroupedColor: Color.fromHex('#222233'),
    },
} satisfies IImageColorStats;
