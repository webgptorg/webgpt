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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_sleek_a_6146ee34-14ff-47af-971e-e0b0d94f6f45-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_sleek_a_6146ee34-14ff-47af-971e-e0b0d94f6f45-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_sleek_a_6146ee34-14ff-47af-971e-e0b0d94f6f45-0_3.texts.json';

/**
 * Image of A wallpaper featuring a repeating pattern of sleek and modern digital devices, such as smartphones, tablets, and laptops, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingARepeatingPatternOfSleekA6146ee3414ff47af971eE0b0d94f6f450_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a repeating pattern of sleek and modern digital devices, such as smartphones, tablets, and laptops, set against a gradient background."
            src="https://cdn.midjourney.com/6146ee34-14ff-47af-971e-e0b0d94f6f45/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingARepeatingPatternOfSleekA6146ee3414ff47af971eE0b0d94f6f450_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingARepeatingPatternOfSleekA6146ee3414ff47af971eE0b0d94f6f450_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingARepeatingPatternOfSleekA6146ee3414ff47af971eE0b0d94f6f450_3_Image.texts =
    texts satisfies IWallpaperTexts;
