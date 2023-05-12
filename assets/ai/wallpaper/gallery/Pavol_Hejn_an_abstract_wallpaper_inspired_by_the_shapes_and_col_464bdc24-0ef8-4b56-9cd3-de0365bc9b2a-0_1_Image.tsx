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
import colorStats from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_464bdc24-0ef8-4b56-9cd3-de0365bc9b2a-0_1.colors.json';
import metadata from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_464bdc24-0ef8-4b56-9cd3-de0365bc9b2a-0_1.json';
import texts from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_464bdc24-0ef8-4b56-9cd3-de0365bc9b2a-0_1.texts.json';

/**
 * Image of An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWallpaperInspiredByTheShapesAndCol464bdc240ef84b569cd3De0365bc9b2a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines."
            src="https://cdn.midjourney.com/464bdc24-0ef8-4b56-9cd3-de0365bc9b2a/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWallpaperInspiredByTheShapesAndCol464bdc240ef84b569cd3De0365bc9b2a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWallpaperInspiredByTheShapesAndCol464bdc240ef84b569cd3De0365bc9b2a0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractWallpaperInspiredByTheShapesAndCol464bdc240ef84b569cd3De0365bc9b2a0_1_Image.texts =
    texts satisfies IWallpaperTexts;
