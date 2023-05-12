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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_an_abstract_cir_b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7-0_3.texts.json';

/**
 * Image of A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of an abstract circuit board, in shades of blue and green."
            src="https://cdn.midjourney.com/b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_3_Image.src = new URL(
    'https://cdn.midjourney.com/b9bcd719-b4e3-42cd-8adf-dd0bc66be8e7/0_3.png',
);
AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfAnAbstractCirB9bcd719B4e342cd8adfDd0bc66be8e70_3_Image.texts =
    texts satisfies IWallpaperTexts;
