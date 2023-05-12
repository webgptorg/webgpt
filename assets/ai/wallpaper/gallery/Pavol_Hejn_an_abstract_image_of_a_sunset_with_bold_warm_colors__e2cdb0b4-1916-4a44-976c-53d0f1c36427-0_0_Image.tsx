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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_sunset_with_bold_warm_colors__e2cdb0b4-1916-4a44-976c-53d0f1c36427-0_0.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_sunset_with_bold_warm_colors__e2cdb0b4-1916-4a44-976c-53d0f1c36427-0_0.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_sunset_with_bold_warm_colors__e2cdb0b4-1916-4a44-976c-53d0f1c36427-0_0.texts.json';

/**
 * Image of An abstract image of a sunset with bold, warm colors for a photography or travel website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a sunset with bold, warm colors for a photography or travel website"
            src="https://cdn.midjourney.com/e2cdb0b4-1916-4a44-976c-53d0f1c36427/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASunsetWithBoldWarmColorsE2cdb0b419164a44976c53d0f1c364270_0_Image.texts =
    texts satisfies IWallpaperTexts;
