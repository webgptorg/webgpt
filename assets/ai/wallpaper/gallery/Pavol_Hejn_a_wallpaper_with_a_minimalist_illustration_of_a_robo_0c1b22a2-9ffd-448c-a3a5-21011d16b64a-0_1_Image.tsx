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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_0c1b22a2-9ffd-448c-a3a5-21011d16b64a-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_0c1b22a2-9ffd-448c-a3a5-21011d16b64a-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_minimalist_illustration_of_a_robo_0c1b22a2-9ffd-448c-a3a5-21011d16b64a-0_1.texts.json';

/**
 * Image of A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a minimalist illustration of a robotic arm, against a background of dark and moody colors."
            src="https://cdn.midjourney.com/0c1b22a2-9ffd-448c-a3a5-21011d16b64a/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithAMinimalistIllustrationOfARobo0c1b22a29ffd448cA3a521011d16b64a0_1_Image.texts =
    texts satisfies IWallpaperTexts;
