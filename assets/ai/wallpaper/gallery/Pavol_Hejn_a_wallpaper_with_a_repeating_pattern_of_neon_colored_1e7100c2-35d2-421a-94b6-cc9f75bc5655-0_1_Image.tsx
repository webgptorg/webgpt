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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_1.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background."
            src="https://cdn.midjourney.com/1e7100c2-35d2-421a-94b6-cc9f75bc5655/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.src = new URL(
    'https://cdn.midjourney.com/1e7100c2-35d2-421a-94b6-cc9f75bc5655/0_1.png',
);
AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfNeonColorede7100c235d2421a94b6Cc9f75bc565501_1_Image.texts =
    texts satisfies IWallpaperTexts;
