/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/8d748831-9591-44f9-b973-c33da51761b8/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_8d748831-9591-44f9-b973-c33da51761b8-0_2.texts.json';

/**
 * Image of A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfAnAbstractCir8d748831959144f9B973C33da51761b80_2_Image.texts =
    texts satisfies IWallpaperTexts;
