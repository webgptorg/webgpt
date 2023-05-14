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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__885c443c-80a4-4b2d-80a2-4fbb6e4e5211-0_1.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__885c443c-80a4-4b2d-80a2-4fbb6e4e5211-0_1.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_binary_code__885c443c-80a4-4b2d-80a2-4fbb6e4e5211-0_1.json';

/**
 * Image of A wallpaper with a repeating pattern of binary code, in a simple font and black and white color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfBinaryCode885c443c80a44b2d80a24fbb6e4e52110_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of binary code, in a simple font and black and white color scheme."
            src="https://cdn.midjourney.com/885c443c-80a4-4b2d-80a2-4fbb6e4e5211/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfBinaryCode885c443c80a44b2d80a24fbb6e4e52110_1_Image.src = new URL(
    'https://cdn.midjourney.com/885c443c-80a4-4b2d-80a2-4fbb6e4e5211/0_1.png',
);
AWallpaperWithARepeatingPatternOfBinaryCode885c443c80a44b2d80a24fbb6e4e52110_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfBinaryCode885c443c80a44b2d80a24fbb6e4e52110_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfBinaryCode885c443c80a44b2d80a24fbb6e4e52110_1_Image.content = content;
