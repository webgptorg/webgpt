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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1-0_0.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractSha2d93eee7F23a4bb9Bb52Ce0dc8b9b7d10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background."
            src="https://cdn.midjourney.com/2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractSha2d93eee7F23a4bb9Bb52Ce0dc8b9b7d10_0_Image.src = new URL(
    'https://cdn.midjourney.com/2d93eee7-f23a-4bb9-bb52-ce0dc8b9b7d1/0_0.png',
);
AWallpaperWithARepeatingPatternOfAbstractSha2d93eee7F23a4bb9Bb52Ce0dc8b9b7d10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractSha2d93eee7F23a4bb9Bb52Ce0dc8b9b7d10_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractSha2d93eee7F23a4bb9Bb52Ce0dc8b9b7d10_0_Image.texts =
    texts satisfies IWallpaperTexts;
