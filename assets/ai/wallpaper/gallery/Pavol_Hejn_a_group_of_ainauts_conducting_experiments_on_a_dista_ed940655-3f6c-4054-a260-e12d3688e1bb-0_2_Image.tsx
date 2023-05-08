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
import metadata from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_ed940655-3f6c-4054-a260-e12d3688e1bb-0_2.json';
import source from './Pavol_Hejn_a_group_of_ainauts_conducting_experiments_on_a_dista_ed940655-3f6c-4054-a260-e12d3688e1bb-0_2.png';

/**
 * Image of A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts conducting experiments on a distant planet, with a red sun setting behind them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsConductingExperimentsOnADistaEd9406553f6c4054A260E12d3688e1bb0_2_Image.colorStats = {
    averageColor: Color.fromHex('#653534'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2211'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#778877'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#333377'), Color.fromHex('#ffffbb')],
    mostFrequentColor: Color.fromHex('#331111'),
    mostSaturatedColor: Color.fromHex('#220000'),
    mostGroupedColor: Color.fromHex('#331111'),
    bottom: {
        averageColor: Color.fromHex('#461a1b'),
        lightestColor: Color.fromHex('#eeeeff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#cc2222'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#558899'), Color.fromHex('#eeeeff')],
        minmaxBlue: [Color.fromHex('#333377'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#331111'),
        mostSaturatedColor: Color.fromHex('#220000'),
        mostGroupedColor: Color.fromHex('#331111'),
    },
} satisfies IImageColorStats;
