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
import colorStats from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_9a3266d2-88cc-457c-b85c-1d0620c791e7-0_2.colors.json';
import metadata from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_9a3266d2-88cc-457c-b85c-1d0620c791e7-0_2.json';
import texts from './Pavol_Hejn_a_calming_beach_sunset_with_palm_trees_for_a_vacatio_9a3266d2-88cc-457c-b85c-1d0620c791e7-0_2.texts.json';

/**
 * Image of A calming beach sunset with palm trees for a vacation rental or real estate website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A calming beach sunset with palm trees for a vacation rental or real estate website"
            src="https://cdn.midjourney.com/9a3266d2-88cc-457c-b85c-1d0620c791e7/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_2_Image.src = new URL(
    'https://cdn.midjourney.com/9a3266d2-88cc-457c-b85c-1d0620c791e7/0_2.png',
);
ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_2_Image.colorStats =
    hydrateColorStats(colorStats);
ACalmingBeachSunsetWithPalmTreesForAVacatio9a3266d288cc457cB85c1d0620c791e70_2_Image.texts =
    texts satisfies IWallpaperTexts;
