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
import colorStats from './Pavol_Hejn_a_repeating_pattern_of_abstract_shapes_and_colors_in_2884858e-3591-41a4-9618-0f9621aa6801-0_0.colors.json';
import metadata from './Pavol_Hejn_a_repeating_pattern_of_abstract_shapes_and_colors_in_2884858e-3591-41a4-9618-0f9621aa6801-0_0.json';
import texts from './Pavol_Hejn_a_repeating_pattern_of_abstract_shapes_and_colors_in_2884858e-3591-41a4-9618-0f9621aa6801-0_0.texts.json';

/**
 * Image of A repeating pattern of abstract shapes and colors, inspired by web design trends and patterns.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARepeatingPatternOfAbstractShapesAndColorsIn2884858e359141a496180f9621aa68010_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A repeating pattern of abstract shapes and colors, inspired by web design trends and patterns."
            src="https://cdn.midjourney.com/2884858e-3591-41a4-9618-0f9621aa6801/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARepeatingPatternOfAbstractShapesAndColorsIn2884858e359141a496180f9621aa68010_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARepeatingPatternOfAbstractShapesAndColorsIn2884858e359141a496180f9621aa68010_0_Image.colorStats =
    hydrateColorStats(colorStats);
ARepeatingPatternOfAbstractShapesAndColorsIn2884858e359141a496180f9621aa68010_0_Image.texts =
    texts satisfies IWallpaperTexts;
