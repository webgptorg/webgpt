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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_6a0aaaf3-09e3-44b4-a355-28da9aa9bfb4-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_6a0aaaf3-09e3-44b4-a355-28da9aa9bfb4-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_6a0aaaf3-09e3-44b4-a355-28da9aa9bfb4-0_3.texts.json';

/**
 * Image of A wallpaper with a simple black and white graphic of a robot's head, against a solid colored background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleBlackAndWhiteGraphicOf6a0aaaf309e344b4A35528da9aa9bfb40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple black and white graphic of a robot's head, against a solid colored background."
            src="https://cdn.midjourney.com/6a0aaaf3-09e3-44b4-a355-28da9aa9bfb4/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleBlackAndWhiteGraphicOf6a0aaaf309e344b4A35528da9aa9bfb40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleBlackAndWhiteGraphicOf6a0aaaf309e344b4A35528da9aa9bfb40_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleBlackAndWhiteGraphicOf6a0aaaf309e344b4A35528da9aa9bfb40_3_Image.texts =
    texts satisfies IWallpaperTexts;
