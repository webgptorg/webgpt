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
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_2.json';
import source from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_2.png';

/**
 * Image of A photograph of a desert landscape at sunset, with warm colors and long shadows.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at sunset, with warm colors and long shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_2_Image.colorStats = {
    averageColor: Color.fromHex('#915a34'),
    lightestColor: Color.fromHex('#ffeedd'),
    darkestColor: Color.fromHex('#111100'),
    minmaxWhite: [Color.fromHex('#ffeedd'), Color.fromHex('#110000')],
    minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#ffeedd')],
    minmaxGreen: [Color.fromHex('#998855'), Color.fromHex('#ffeedd')],
    minmaxBlue: [Color.fromHex('#555555'), Color.fromHex('#ffee88')],
    mostFrequentColor: Color.fromHex('#884422'),
    mostSaturatedColor: Color.fromHex('#552200'),
    mostGroupedColor: Color.fromHex('#997766'),
    bottom: {
        averageColor: Color.fromHex('#844822'),
        lightestColor: Color.fromHex('#dd9966'),
        darkestColor: Color.fromHex('#111100'),
        minmaxWhite: [Color.fromHex('#ffaa55'), Color.fromHex('#110000')],
        minmaxRed: [Color.fromHex('#bb4411'), Color.fromHex('#111111')],
        minmaxGreen: [Color.fromHex('#997744'), Color.fromHex('#440000')],
        minmaxBlue: [Color.fromHex('#664444'), Color.fromHex('#ffaa44')],
        mostFrequentColor: Color.fromHex('#884422'),
        mostSaturatedColor: Color.fromHex('#662200'),
        mostGroupedColor: Color.fromHex('#442211'),
    },
} satisfies IImageColorStats;
