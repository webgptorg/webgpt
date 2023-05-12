/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/2de6a8c8-4984-40df-bd0b-abe3922930c1/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_2.texts.json';

/**
 * Image of A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAColorfulFractalPatternWitde6a8c8498440dfBd0bAbe3922930c102_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAColorfulFractalPatternWitde6a8c8498440dfBd0bAbe3922930c102_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAColorfulFractalPatternWitde6a8c8498440dfBd0bAbe3922930c102_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAColorfulFractalPatternWitde6a8c8498440dfBd0bAbe3922930c102_2_Image.texts =
    texts satisfies IWallpaperTexts;
