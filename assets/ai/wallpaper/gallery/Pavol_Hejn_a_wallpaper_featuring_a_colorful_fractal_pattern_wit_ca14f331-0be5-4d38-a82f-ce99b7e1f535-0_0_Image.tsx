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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_ca14f331-0be5-4d38-a82f-ce99b7e1f535-0_0.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_ca14f331-0be5-4d38-a82f-ce99b7e1f535-0_0.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_colorful_fractal_pattern_wit_ca14f331-0be5-4d38-a82f-ce99b7e1f535-0_0.json';

/**
 * Image of A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAColorfulFractalPatternWitCa14f3310be54d38A82fCe99b7e1f5350_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a colorful fractal pattern, with intricate lines and bold colors."
            src="https://cdn.midjourney.com/ca14f331-0be5-4d38-a82f-ce99b7e1f535/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAColorfulFractalPatternWitCa14f3310be54d38A82fCe99b7e1f5350_0_Image.src = new URL(
    'https://cdn.midjourney.com/ca14f331-0be5-4d38-a82f-ce99b7e1f535/0_0.png',
);
AWallpaperFeaturingAColorfulFractalPatternWitCa14f3310be54d38A82fCe99b7e1f5350_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAColorfulFractalPatternWitCa14f3310be54d38A82fCe99b7e1f5350_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAColorfulFractalPatternWitCa14f3310be54d38A82fCe99b7e1f5350_0_Image.content = content;
