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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_simple_geome_0ea8197d-fb7e-4689-ac9d-a00497469caa-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_simple_geome_0ea8197d-fb7e-4689-ac9d-a00497469caa-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_simple_geome_0ea8197d-fb7e-4689-ac9d-a00497469caa-0_2.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of simple geometric shapes, in a monochromatic color palette such as grey or blue.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfSimpleGeome0ea8197dFb7e4689Ac9dA00497469caa0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of simple geometric shapes, in a monochromatic color palette such as grey or blue."
            src="https://cdn.midjourney.com/0ea8197d-fb7e-4689-ac9d-a00497469caa/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfSimpleGeome0ea8197dFb7e4689Ac9dA00497469caa0_2_Image.src = new URL(
    'https://cdn.midjourney.com/0ea8197d-fb7e-4689-ac9d-a00497469caa/0_2.png',
);
AWallpaperWithARepeatingPatternOfSimpleGeome0ea8197dFb7e4689Ac9dA00497469caa0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfSimpleGeome0ea8197dFb7e4689Ac9dA00497469caa0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfSimpleGeome0ea8197dFb7e4689Ac9dA00497469caa0_2_Image.texts =
    texts satisfies IWallpaperTexts;
