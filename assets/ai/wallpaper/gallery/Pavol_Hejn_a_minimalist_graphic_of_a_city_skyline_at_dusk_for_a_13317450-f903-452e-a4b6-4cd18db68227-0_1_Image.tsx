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
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dusk_for_a_13317450-f903-452e-a4b6-4cd18db68227-0_1.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dusk_for_a_13317450-f903-452e-a4b6-4cd18db68227-0_1.json';
import texts from './Pavol_Hejn_a_minimalist_graphic_of_a_city_skyline_at_dusk_for_a_13317450-f903-452e-a4b6-4cd18db68227-0_1.texts.json';

/**
 * Image of A minimalist graphic of a city skyline at dusk for a real estate or architecture website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfACitySkylineAtDuskForA3317450F903452eA4b64cd18db6822701_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a city skyline at dusk for a real estate or architecture website"
            src="https://cdn.midjourney.com/13317450-f903-452e-a4b6-4cd18db68227/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfACitySkylineAtDuskForA3317450F903452eA4b64cd18db6822701_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfACitySkylineAtDuskForA3317450F903452eA4b64cd18db6822701_1_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfACitySkylineAtDuskForA3317450F903452eA4b64cd18db6822701_1_Image.texts =
    texts satisfies IWallpaperTexts;
