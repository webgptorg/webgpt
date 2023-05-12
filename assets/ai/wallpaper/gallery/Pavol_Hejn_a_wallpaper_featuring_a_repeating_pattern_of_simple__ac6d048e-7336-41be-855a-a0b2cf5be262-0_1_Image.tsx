/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/ac6d048e-7336-41be-855a-a0b2cf5be262/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__ac6d048e-7336-41be-855a-a0b2cf5be262-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__ac6d048e-7336-41be-855a-a0b2cf5be262-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__ac6d048e-7336-41be-855a-a0b2cf5be262-0_1.texts.json';

/**
 * Image of A wallpaper featuring a repeating pattern of simple equations and formulas, arranged in a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingARepeatingPatternOfSimpleAc6d048e733641be855aA0b2cf5be2620_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a repeating pattern of simple equations and formulas, arranged in a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingARepeatingPatternOfSimpleAc6d048e733641be855aA0b2cf5be2620_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingARepeatingPatternOfSimpleAc6d048e733641be855aA0b2cf5be2620_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingARepeatingPatternOfSimpleAc6d048e733641be855aA0b2cf5be2620_1_Image.texts =
    texts satisfies IWallpaperTexts;
