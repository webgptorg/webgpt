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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_0.colors.json';
import content from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_0.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_0.json';

/**
 * Image of A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green."
            src="https://cdn.midjourney.com/8d748831-9591-44f9-b973-c33da51761b8/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_0_Image.src = new URL(
    'https://cdn.midjourney.com/8d748831-9591-44f9-b973-c33da51761b8/0_0.png',
);
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_0_Image.content = content;
