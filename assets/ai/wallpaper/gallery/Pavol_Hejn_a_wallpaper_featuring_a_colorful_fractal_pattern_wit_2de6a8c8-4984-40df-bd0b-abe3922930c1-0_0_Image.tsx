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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_2de6a8c8-4984-40df-bd0b-abe3922930c1-0_0.texts.json';

/**
 * Image of A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAColorfulFractalPatternWit2de6a8c8498440dfBd0bAbe3922930c10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors."
            src="https://cdn.midjourney.com/2de6a8c8-4984-40df-bd0b-abe3922930c1/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAColorfulFractalPatternWit2de6a8c8498440dfBd0bAbe3922930c10_0_Image.src = new URL(
    'https://cdn.midjourney.com/2de6a8c8-4984-40df-bd0b-abe3922930c1/0_0.png',
);
AWallpaperFeaturingAColorfulFractalPatternWit2de6a8c8498440dfBd0bAbe3922930c10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAColorfulFractalPatternWit2de6a8c8498440dfBd0bAbe3922930c10_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAColorfulFractalPatternWit2de6a8c8498440dfBd0bAbe3922930c10_0_Image.texts =
    texts satisfies IWallpaperTexts;
