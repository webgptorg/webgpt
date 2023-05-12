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
import colorStats from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__d1f72b89-0604-443b-95fe-822318ac0437-0_1.colors.json';
import metadata from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__d1f72b89-0604-443b-95fe-822318ac0437-0_1.json';
import texts from './Pavol_Hejn_an_abstract_watercolor_painting_with_vibrant_colors__d1f72b89-0604-443b-95fe-822318ac0437-0_1.texts.json';

/**
 * Image of An abstract watercolor painting with vibrant colors for an art or design blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractWatercolorPaintingWithVibrantColorsD1f72b890604443b95fe822318ac04370_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract watercolor painting with vibrant colors for an art or design blog"
            src="https://cdn.midjourney.com/d1f72b89-0604-443b-95fe-822318ac0437/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractWatercolorPaintingWithVibrantColorsD1f72b890604443b95fe822318ac04370_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractWatercolorPaintingWithVibrantColorsD1f72b890604443b95fe822318ac04370_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractWatercolorPaintingWithVibrantColorsD1f72b890604443b95fe822318ac04370_1_Image.texts =
    texts satisfies IWallpaperTexts;
