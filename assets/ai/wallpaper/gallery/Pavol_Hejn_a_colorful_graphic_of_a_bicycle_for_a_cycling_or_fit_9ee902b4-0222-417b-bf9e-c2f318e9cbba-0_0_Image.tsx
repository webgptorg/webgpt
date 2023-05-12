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
import colorStats from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_9ee902b4-0222-417b-bf9e-c2f318e9cbba-0_0.colors.json';
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_9ee902b4-0222-417b-bf9e-c2f318e9cbba-0_0.json';
import texts from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_9ee902b4-0222-417b-bf9e-c2f318e9cbba-0_0.texts.json';

/**
 * Image of A colorful graphic of a bicycle for a cycling or fitness blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABicycleForACyclingOrFit9ee902b40222417bBf9eC2f318e9cbba0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a bicycle for a cycling or fitness blog"
            src="https://cdn.midjourney.com/9ee902b4-0222-417b-bf9e-c2f318e9cbba/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AColorfulGraphicOfABicycleForACyclingOrFit9ee902b40222417bBf9eC2f318e9cbba0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABicycleForACyclingOrFit9ee902b40222417bBf9eC2f318e9cbba0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AColorfulGraphicOfABicycleForACyclingOrFit9ee902b40222417bBf9eC2f318e9cbba0_0_Image.texts =
    texts satisfies IWallpaperTexts;
