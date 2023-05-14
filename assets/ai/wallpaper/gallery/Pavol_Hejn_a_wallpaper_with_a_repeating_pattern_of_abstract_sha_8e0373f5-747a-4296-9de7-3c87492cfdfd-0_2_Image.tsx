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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_8e0373f5-747a-4296-9de7-3c87492cfdfd-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_8e0373f5-747a-4296-9de7-3c87492cfdfd-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_8e0373f5-747a-4296-9de7-3c87492cfdfd-0_2.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract shapes inspired by the Mandelbrot set, in a monochromatic color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractSha8e0373f5747a42969de73c87492cfdfd0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract shapes inspired by the Mandelbrot set, in a monochromatic color scheme."
            src="https://cdn.midjourney.com/8e0373f5-747a-4296-9de7-3c87492cfdfd/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithARepeatingPatternOfAbstractSha8e0373f5747a42969de73c87492cfdfd0_2_Image.src = new URL(
    'https://cdn.midjourney.com/8e0373f5-747a-4296-9de7-3c87492cfdfd/0_2.png',
);
AWallpaperWithARepeatingPatternOfAbstractSha8e0373f5747a42969de73c87492cfdfd0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractSha8e0373f5747a42969de73c87492cfdfd0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractSha8e0373f5747a42969de73c87492cfdfd0_2_Image.content = content;
