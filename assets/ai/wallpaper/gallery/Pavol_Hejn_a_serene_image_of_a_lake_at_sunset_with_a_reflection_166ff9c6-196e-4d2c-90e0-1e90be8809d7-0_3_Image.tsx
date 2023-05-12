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
import colorStats from './Pavol_Hejn_a_serene_image_of_a_lake_at_sunset_with_a_reflection_166ff9c6-196e-4d2c-90e0-1e90be8809d7-0_3.colors.json';
import metadata from './Pavol_Hejn_a_serene_image_of_a_lake_at_sunset_with_a_reflection_166ff9c6-196e-4d2c-90e0-1e90be8809d7-0_3.json';
import texts from './Pavol_Hejn_a_serene_image_of_a_lake_at_sunset_with_a_reflection_166ff9c6-196e-4d2c-90e0-1e90be8809d7-0_3.texts.json';

/**
 * Image of A serene image of a lake at sunset with a reflection of the sky for a travel or vacation website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASereneImageOfALakeAtSunsetWithAReflection166ff9c6196e4d2c90e01e90be8809d70_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene image of a lake at sunset with a reflection of the sky for a travel or vacation website"
            src="https://cdn.midjourney.com/166ff9c6-196e-4d2c-90e0-1e90be8809d7/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASereneImageOfALakeAtSunsetWithAReflection166ff9c6196e4d2c90e01e90be8809d70_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneImageOfALakeAtSunsetWithAReflection166ff9c6196e4d2c90e01e90be8809d70_3_Image.colorStats =
    hydrateColorStats(colorStats);
ASereneImageOfALakeAtSunsetWithAReflection166ff9c6196e4d2c90e01e90be8809d70_3_Image.texts =
    texts satisfies IWallpaperTexts;
