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
import { IWallpaperComponentProps, IWallpaperMetadata } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_single_graphic_of_a_futuristic_ci_39a50bb2-bfe7-43cb-a6c9-56666ffc50d3-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_single_graphic_of_a_futuristic_ci_39a50bb2-bfe7-43cb-a6c9-56666ffc50d3-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_graphic_of_a_futuristic_ci_39a50bb2-bfe7-43cb-a6c9-56666ffc50d3-0_2.json';

/**
 * Image of A wallpaper with a single graphic of a futuristic cityscape, in a solid color such as orange or green.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single graphic of a futuristic cityscape, in a solid color such as orange or green."
            src="https://cdn.midjourney.com/39a50bb2-bfe7-43cb-a6c9-56666ffc50d3/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_2_Image.src = new URL(
    'https://cdn.midjourney.com/39a50bb2-bfe7-43cb-a6c9-56666ffc50d3/0_2.png',
);
AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASingleGraphicOfAFuturisticCi39a50bb2Bfe743cbA6c956666ffc50d30_2_Image.content = content;
