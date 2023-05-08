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
import metadata from './Pavol_Hejn_a_team_of_ainauts_conducting_experiments_on_a_massiv_f23acb1b-1a6a-403b-b7f6-e874e5adc0cb-0_3.json';
import source from './Pavol_Hejn_a_team_of_ainauts_conducting_experiments_on_a_massiv_f23acb1b-1a6a-403b-b7f6-e874e5adc0cb-0_3.png';

/**
 * Image of A team of AInauts conducting experiments on a massive, frozen moon orbiting a gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_3_Image(
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

ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsConductingExperimentsOnAMassivF23acb1b1a6a403bB7f6E874e5adc0cb0_3_Image.colorStats = {
    averageColor: Color.fromHex('#4d637a'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#664433'), Color.fromHex('#ddffff')],
    minmaxGreen: [Color.fromHex('#446655'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#335599'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#446677'),
    mostSaturatedColor: Color.fromHex('#001111'),
    mostGroupedColor: Color.fromHex('#111122'),
    bottom: {
        averageColor: Color.fromHex('#617890'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#664433'), Color.fromHex('#ddffff')],
        minmaxGreen: [Color.fromHex('#446655'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#446677'),
        mostSaturatedColor: Color.fromHex('#001122'),
        mostGroupedColor: Color.fromHex('#335577'),
    },
} satisfies IImageColorStats;
