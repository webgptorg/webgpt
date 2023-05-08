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
import metadata from './Pavol_Hejn_an_abstract_image_of_a_star_field_with_bright_colors_650a0f95-7462-4734-b12b-2250b6978b3e-0_2.json';
import source from './Pavol_Hejn_an_abstract_image_of_a_star_field_with_bright_colors_650a0f95-7462-4734-b12b-2250b6978b3e-0_2.png';

/**
 * Image of An abstract image of a star field, with bright colors and swirling patterns that represent the mystery and beauty of the cosmos.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfAStarFieldWithBrightColors650a0f9574624734B12b2250b6978b3e0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a star field, with bright colors and swirling patterns that represent the mystery and beauty of the cosmos."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfAStarFieldWithBrightColors650a0f9574624734B12b2250b6978b3e0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfAStarFieldWithBrightColors650a0f9574624734B12b2250b6978b3e0_2_Image.colorStats = {
    averageColor: Color.fromHex('#5e473d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#22aa77'), Color.fromHex('#cc0022')],
    minmaxBlue: [Color.fromHex('#115588'), Color.fromHex('#ffdd33')],
    mostFrequentColor: Color.fromHex('#442233'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#222222'),
    bottom: {
        averageColor: Color.fromHex('#4c393a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#118866'), Color.fromHex('#cc0022')],
        minmaxBlue: [Color.fromHex('#225588'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#442233'),
        mostSaturatedColor: Color.fromHex('#001133'),
        mostGroupedColor: Color.fromHex('#111122'),
    },
} satisfies IImageColorStats;
