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
import metadata from './Pavol_Hejn_a_team_of_ainauts_conducting_experiments_on_a_massiv_f23acb1b-1a6a-403b-b7f6-e874e5adc0cb-0_1.json';
import source from './Pavol_Hejn_a_team_of_ainauts_conducting_experiments_on_a_massiv_f23acb1b-1a6a-403b-b7f6-e874e5adc0cb-0_1.png';

/**
 * Image of A team of AInauts conducting experiments on a massive, frozen moon orbiting a gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts conducting experiments on a massive, frozen moon orbiting a gas giant planet."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_1_Image.colorStats = {
    averageColor: Color.fromHex('#4c667c'),
    lightestColor: Color.fromHex('#eeeeff'),
    darkestColor: Color.fromHex('#001111'),
    minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000011')],
    minmaxRed: [Color.fromHex('#bb5511'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#eeeeff')],
    minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#eeffff')],
    mostFrequentColor: Color.fromHex('#112244'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#99bbcc'),
    bottom: {
        averageColor: Color.fromHex('#3e566c'),
        lightestColor: Color.fromHex('#eeffff'),
        darkestColor: Color.fromHex('#001111'),
        minmaxWhite: [Color.fromHex('#eeffff'), Color.fromHex('#000011')],
        minmaxRed: [Color.fromHex('#bb5511'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#667766'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#114477'), Color.fromHex('#eeffff')],
        mostFrequentColor: Color.fromHex('#112244'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#223344'),
    },
} satisfies IImageColorStats;
