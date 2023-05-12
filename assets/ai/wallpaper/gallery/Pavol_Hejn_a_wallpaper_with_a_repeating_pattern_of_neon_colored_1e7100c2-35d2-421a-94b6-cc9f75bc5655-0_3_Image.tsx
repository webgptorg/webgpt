/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/1e7100c2-35d2-421a-94b6-cc9f75bc5655/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_neon_colored_1e7100c2-35d2-421a-94b6-cc9f75bc5655-0_3.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of neon-colored circuitry, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfNeonColored1e7100c235d2421a94b6Cc9f75bc56550_3_Image.texts =
    texts satisfies IWallpaperTexts;
