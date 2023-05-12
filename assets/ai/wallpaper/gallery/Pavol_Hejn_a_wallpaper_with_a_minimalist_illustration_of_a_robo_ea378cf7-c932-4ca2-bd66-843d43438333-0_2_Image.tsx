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
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_ea378cf7-c932-4ca2-bd66-843d43438333-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_ea378cf7-c932-4ca2-bd66-843d43438333-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_ea378cf7-c932-4ca2-bd66-843d43438333-0_2.texts.json';

/**
 * Image of A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors."
            src="https://cdn.midjourney.com/ea378cf7-c932-4ca2-bd66-843d43438333/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithAMinimalistIllustrationOfARoboEa378cf7C9324ca2Bd66843d434383330_2_Image.texts =
    texts satisfies IWallpaperTexts;
