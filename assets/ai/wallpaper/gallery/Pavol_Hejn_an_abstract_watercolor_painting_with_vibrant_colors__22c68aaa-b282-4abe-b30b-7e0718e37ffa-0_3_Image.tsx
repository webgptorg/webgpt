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
import colorStats from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__22c68aaa-b282-4abe-b30b-7e0718e37ffa-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__22c68aaa-b282-4abe-b30b-7e0718e37ffa-0_3.json';
import texts from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__22c68aaa-b282-4abe-b30b-7e0718e37ffa-0_3.texts.json';

/**
 * Image of An abstract watercolor painting with vibrant colors for an art or design blog
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWatercolorPaintingWithVibrantColors22c68aaaB2824abeB30b7e0718e37ffa0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract watercolor painting with vibrant colors for an art or design blog"
            src="https://cdn.midjourney.com/22c68aaa-b282-4abe-b30b-7e0718e37ffa/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWatercolorPaintingWithVibrantColors22c68aaaB2824abeB30b7e0718e37ffa0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWatercolorPaintingWithVibrantColors22c68aaaB2824abeB30b7e0718e37ffa0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractWatercolorPaintingWithVibrantColors22c68aaaB2824abeB30b7e0718e37ffa0_3_Image.texts =
    texts satisfies IWallpaperTexts;
