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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_287d5a98-9d6d-4aa4-b05c-d8cb8d4bed95-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_287d5a98-9d6d-4aa4-b05c-d8cb8d4bed95-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_black_and_white_graphic_of_287d5a98-9d6d-4aa4-b05c-d8cb8d4bed95-0_0.texts.json';

/**
 * Image of A wallpaper with a simple black and white graphic of a robot's head, against a solid colored background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleBlackAndWhiteGraphicOf287d5a989d6d4aa4B05cD8cb8d4bed950_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple black and white graphic of a robot's head, against a solid colored background."
            src="https://cdn.midjourney.com/287d5a98-9d6d-4aa4-b05c-d8cb8d4bed95/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleBlackAndWhiteGraphicOf287d5a989d6d4aa4B05cD8cb8d4bed950_0_Image.src = new URL(
    'https://cdn.midjourney.com/287d5a98-9d6d-4aa4-b05c-d8cb8d4bed95/0_0.png',
);
AWallpaperWithASimpleBlackAndWhiteGraphicOf287d5a989d6d4aa4B05cD8cb8d4bed950_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleBlackAndWhiteGraphicOf287d5a989d6d4aa4B05cD8cb8d4bed950_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleBlackAndWhiteGraphicOf287d5a989d6d4aa4B05cD8cb8d4bed950_0_Image.texts =
    texts satisfies IWallpaperTexts;
