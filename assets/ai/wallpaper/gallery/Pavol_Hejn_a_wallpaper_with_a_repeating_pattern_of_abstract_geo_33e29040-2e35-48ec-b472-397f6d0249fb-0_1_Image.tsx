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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_33e29040-2e35-48ec-b472-397f6d0249fb-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_33e29040-2e35-48ec-b472-397f6d0249fb-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_geo_33e29040-2e35-48ec-b472-397f6d0249fb-0_1.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract geometric shapes and patterns, inspired by web design trends and color schemes."
            src="https://cdn.midjourney.com/33e29040-2e35-48ec-b472-397f6d0249fb/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.src = new URL(
    'https://cdn.midjourney.com/33e29040-2e35-48ec-b472-397f6d0249fb/0_1.png',
);
AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractGeo33e290402e3548ecB472397f6d0249fb0_1_Image.content = content;
