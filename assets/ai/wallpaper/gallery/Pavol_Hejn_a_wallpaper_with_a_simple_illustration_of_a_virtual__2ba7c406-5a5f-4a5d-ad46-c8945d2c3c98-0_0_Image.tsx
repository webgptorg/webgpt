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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_a_virtual__2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98-0_0.texts.json';

/**
 * Image of A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of a virtual reality headset, against a gradient background of two contrasting colors."
            src="https://cdn.midjourney.com/2ba7c406-5a5f-4a5d-ad46-c8945d2c3c98/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleIllustrationOfAVirtual2ba7c4065a5f4a5dAd46C8945d2c3c980_0_Image.texts =
    texts satisfies IWallpaperTexts;
