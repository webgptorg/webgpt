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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_2.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_2.png';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_2_Image.colorStats = {
    averageColor: Color.fromHex('#374c45'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb4400'), Color.fromHex('#bbffff')],
    minmaxGreen: [Color.fromHex('#77aa55'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffff99')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#112222'),
    bottom: {
        averageColor: Color.fromHex('#282c1d'),
        lightestColor: Color.fromHex('#ffffdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb4400'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#77aa55'), Color.fromHex('#ffffdd')],
        minmaxBlue: [Color.fromHex('#226699'), Color.fromHex('#ffff99')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#111100'),
    },
} satisfies IImageColorStats;
