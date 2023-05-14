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
import colorStats from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_wallpaper_inspired_by_the_shapes_and_col_028d25e0-9687-43a2-aeb7-17a3b30b0362-0_0.json';

/**
 * Image of An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWallpaperInspiredByTheShapesAndCol28d25e0968743a2Aeb717a3b30b036200_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract wallpaper inspired by the shapes and colors of quantum physics, with bold colors and intricate lines."
            src="https://cdn.midjourney.com/028d25e0-9687-43a2-aeb7-17a3b30b0362/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractWallpaperInspiredByTheShapesAndCol28d25e0968743a2Aeb717a3b30b036200_0_Image.src = new URL(
    'https://cdn.midjourney.com/028d25e0-9687-43a2-aeb7-17a3b30b0362/0_0.png',
);
AnAbstractWallpaperInspiredByTheShapesAndCol28d25e0968743a2Aeb717a3b30b036200_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWallpaperInspiredByTheShapesAndCol28d25e0968743a2Aeb717a3b30b036200_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractWallpaperInspiredByTheShapesAndCol28d25e0968743a2Aeb717a3b30b036200_0_Image.content = content;
