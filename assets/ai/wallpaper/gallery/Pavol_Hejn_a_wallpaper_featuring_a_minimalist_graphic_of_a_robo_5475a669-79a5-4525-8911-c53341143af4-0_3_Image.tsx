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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_5475a669-79a5-4525-8911-c53341143af4-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_5475a669-79a5-4525-8911-c53341143af4-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_minimalist_graphic_of_a_robo_5475a669-79a5-4525-8911-c53341143af4-0_3.texts.json';

/**
 * Image of A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a minimalist graphic of a robot hand holding a stylus or pen, with a space for taking notes or sketching ideas."
            src="https://cdn.midjourney.com/5475a669-79a5-4525-8911-c53341143af4/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.src = new URL(
    'https://cdn.midjourney.com/5475a669-79a5-4525-8911-c53341143af4/0_3.png',
);
AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAMinimalistGraphicOfARobo5475a66979a545258911C53341143af40_3_Image.texts =
    texts satisfies IWallpaperTexts;
