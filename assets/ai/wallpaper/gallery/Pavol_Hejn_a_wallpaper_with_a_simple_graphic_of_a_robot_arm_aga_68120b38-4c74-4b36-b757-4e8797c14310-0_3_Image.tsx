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
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_3.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_robot_arm_aga_68120b38-4c74-4b36-b757-4e8797c14310-0_3.png';

/**
 * Image of A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a robot arm, against a gradient background of two complementary colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfARobotArmAga68120b384c744b36B7574e8797c143100_3_Image.colorStats = {
    averageColor: Color.fromHex('#d47757'),
    lightestColor: Color.fromHex('#ff55ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ddeeee'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#77ddff')],
    minmaxGreen: [Color.fromHex('#998844'), Color.fromHex('#ee11cc')],
    minmaxBlue: [Color.fromHex('#2211dd'), Color.fromHex('#ffbb22')],
    mostFrequentColor: Color.fromHex('#ff9933'),
    mostSaturatedColor: Color.fromHex('#220022'),
    mostGroupedColor: Color.fromHex('#ff7755'),
    bottom: {
        averageColor: Color.fromHex('#c46353'),
        lightestColor: Color.fromHex('#ee66ff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeddee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#66ccff')],
        minmaxGreen: [Color.fromHex('#998844'), Color.fromHex('#cc33ff')],
        minmaxBlue: [Color.fromHex('#2211dd'), Color.fromHex('#ff9911')],
        mostFrequentColor: Color.fromHex('#ff9933'),
        mostSaturatedColor: Color.fromHex('#220022'),
        mostGroupedColor: Color.fromHex('#ff8833'),
    },
} satisfies IImageColorStats;
