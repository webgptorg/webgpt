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
import colorStats from './Pavol_Hejn_a_cozy_image_of_a_cabin_in_the_woods_with_snow_falli_6d063f5c-1618-43fe-b3ca-3cd61ff4322f-0_3.colors.json';
import metadata from './Pavol_Hejn_a_cozy_image_of_a_cabin_in_the_woods_with_snow_falli_6d063f5c-1618-43fe-b3ca-3cd61ff4322f-0_3.json';
import texts from './Pavol_Hejn_a_cozy_image_of_a_cabin_in_the_woods_with_snow_falli_6d063f5c-1618-43fe-b3ca-3cd61ff4322f-0_3.texts.json';

/**
 * Image of A cozy image of a cabin in the woods with snow falling for a winter or holiday website.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACozyImageOfACabinInTheWoodsWithSnowFalli6d063f5c161843feB3ca3cd61ff4322f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A cozy image of a cabin in the woods with snow falling for a winter or holiday website."
            src="https://cdn.midjourney.com/6d063f5c-1618-43fe-b3ca-3cd61ff4322f/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACozyImageOfACabinInTheWoodsWithSnowFalli6d063f5c161843feB3ca3cd61ff4322f0_3_Image.src = new URL(
    'https://cdn.midjourney.com/6d063f5c-1618-43fe-b3ca-3cd61ff4322f/0_3.png',
);
ACozyImageOfACabinInTheWoodsWithSnowFalli6d063f5c161843feB3ca3cd61ff4322f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACozyImageOfACabinInTheWoodsWithSnowFalli6d063f5c161843feB3ca3cd61ff4322f0_3_Image.colorStats =
    hydrateColorStats(colorStats);
ACozyImageOfACabinInTheWoodsWithSnowFalli6d063f5c161843feB3ca3cd61ff4322f0_3_Image.texts =
    texts satisfies IWallpaperTexts;
