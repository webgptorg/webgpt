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
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dawn_for_a_549ef7f6-da04-45a6-87cb-f5a127d0ce43-0_3.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dawn_for_a_549ef7f6-da04-45a6-87cb-f5a127d0ce43-0_3.json';
import texts from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dawn_for_a_549ef7f6-da04-45a6-87cb-f5a127d0ce43-0_3.texts.json';

/**
 * Image of A minimalist graphic of a city skyline at dawn for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfACitySkylineAtDawnForA549ef7f6Da0445a687cbF5a127d0ce430_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a city skyline at dawn for a business or marketing website"
            src="https://cdn.midjourney.com/549ef7f6-da04-45a6-87cb-f5a127d0ce43/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfACitySkylineAtDawnForA549ef7f6Da0445a687cbF5a127d0ce430_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfACitySkylineAtDawnForA549ef7f6Da0445a687cbF5a127d0ce430_3_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfACitySkylineAtDawnForA549ef7f6Da0445a687cbF5a127d0ce430_3_Image.texts =
    texts satisfies IWallpaperTexts;
