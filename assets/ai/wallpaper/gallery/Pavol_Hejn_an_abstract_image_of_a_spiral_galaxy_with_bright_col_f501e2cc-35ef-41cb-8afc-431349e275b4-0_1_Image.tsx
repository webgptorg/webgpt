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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_f501e2cc-35ef-41cb-8afc-431349e275b4-0_1.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_f501e2cc-35ef-41cb-8afc-431349e275b4-0_1.png';

/**
 * Image of An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_1_Image.colorStats = {
    averageColor: Color.fromHex('#635450'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#cc2200'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#aa0011')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffbb11')],
    mostFrequentColor: Color.fromHex('#442222'),
    mostSaturatedColor: Color.fromHex('#001122'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#684d49'),
        lightestColor: Color.fromHex('#ffeeee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#ffffee')],
        minmaxGreen: [Color.fromHex('#558866'), Color.fromHex('#990011')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffcc33')],
        mostFrequentColor: Color.fromHex('#442222'),
        mostSaturatedColor: Color.fromHex('#002233'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
