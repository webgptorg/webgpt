/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/3d15429c-3bc5-41d1-984f-e15e14713029/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_3d15429c-3bc5-41d1-984f-e15e14713029-0_2.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_3d15429c-3bc5-41d1-984f-e15e14713029-0_2.json';
import texts from './Pavol_Hejn_a_minimalist_wallpaper_with_a_single_line_drawing_of_3d15429c-3bc5-41d1-984f-e15e14713029-0_2.texts.json';

/**
 * Image of A minimalist wallpaper with a single line drawing of a cyborg, in a striking color such as bright red or blue.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist wallpaper with a single line drawing of a cyborg, in a striking color such as bright red or blue."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistWallpaperWithASingleLineDrawingOf3d15429c3bc541d1984fE15e147130290_2_Image.texts =
    texts satisfies IWallpaperTexts;
