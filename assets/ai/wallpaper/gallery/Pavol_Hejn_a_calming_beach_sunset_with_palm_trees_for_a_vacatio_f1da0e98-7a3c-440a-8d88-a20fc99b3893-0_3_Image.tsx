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
import colorStats from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_f1da0e98-7a3c-440a-8d88-a20fc99b3893-0_3.colors.json';
import metadata from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_f1da0e98-7a3c-440a-8d88-a20fc99b3893-0_3.json';
import texts from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_f1da0e98-7a3c-440a-8d88-a20fc99b3893-0_3.texts.json';

/**
 * Image of A calming beach sunset with palm trees for a vacation rental or real estate website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACalmingBeachSunsetWithPalmTreesForAVacatioF1da0e987a3c440a8d88A20fc99b38930_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A calming beach sunset with palm trees for a vacation rental or real estate website"
            src="https://cdn.midjourney.com/f1da0e98-7a3c-440a-8d88-a20fc99b3893/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACalmingBeachSunsetWithPalmTreesForAVacatioF1da0e987a3c440a8d88A20fc99b38930_3_Image.src = new URL(
    'https://cdn.midjourney.com/f1da0e98-7a3c-440a-8d88-a20fc99b3893/0_3.png',
);
ACalmingBeachSunsetWithPalmTreesForAVacatioF1da0e987a3c440a8d88A20fc99b38930_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACalmingBeachSunsetWithPalmTreesForAVacatioF1da0e987a3c440a8d88A20fc99b38930_3_Image.colorStats =
    hydrateColorStats(colorStats);
ACalmingBeachSunsetWithPalmTreesForAVacatioF1da0e987a3c440a8d88A20fc99b38930_3_Image.texts =
    texts satisfies IWallpaperTexts;
