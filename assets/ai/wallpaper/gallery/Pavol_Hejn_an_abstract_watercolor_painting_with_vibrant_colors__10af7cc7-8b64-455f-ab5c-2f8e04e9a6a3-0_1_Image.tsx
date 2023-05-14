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
import colorStats from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3-0_1.colors.json';
import content from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3-0_1.content.md';
import metadata from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3-0_1.json';

/**
 * Image of An abstract watercolor painting with vibrant colors for an art or design blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWatercolorPaintingWithVibrantColors0af7cc78b64455fAb5c2f8e04e9a6a301_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract watercolor painting with vibrant colors for an art or design blog"
            src="https://cdn.midjourney.com/10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractWatercolorPaintingWithVibrantColors0af7cc78b64455fAb5c2f8e04e9a6a301_1_Image.src = new URL(
    'https://cdn.midjourney.com/10af7cc7-8b64-455f-ab5c-2f8e04e9a6a3/0_1.png',
);
AnAbstractWatercolorPaintingWithVibrantColors0af7cc78b64455fAb5c2f8e04e9a6a301_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWatercolorPaintingWithVibrantColors0af7cc78b64455fAb5c2f8e04e9a6a301_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractWatercolorPaintingWithVibrantColors0af7cc78b64455fAb5c2f8e04e9a6a301_1_Image.content = content;
