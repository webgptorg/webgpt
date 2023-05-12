/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/02a06cf6-ae7a-48c4-9d1c-9be0b54ccb14/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_snowy_mountain_peak_with_a_clear_blue_sky_02a06cf6-ae7a-48c4-9d1c-9be0b54ccb14-0_2.colors.json';
import metadata from './Pavol_Hejn_a_snowy_mountain_peak_with_a_clear_blue_sky_02a06cf6-ae7a-48c4-9d1c-9be0b54ccb14-0_2.json';
import texts from './Pavol_Hejn_a_snowy_mountain_peak_with_a_clear_blue_sky_02a06cf6-ae7a-48c4-9d1c-9be0b54ccb14-0_2.texts.json';

/**
 * Image of A snowy mountain peak with a clear blue sky
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASnowyMountainPeakWithAClearBlueSky02a06cf6Ae7a48c49d1c9be0b54ccb140_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A snowy mountain peak with a clear blue sky"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASnowyMountainPeakWithAClearBlueSky02a06cf6Ae7a48c49d1c9be0b54ccb140_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASnowyMountainPeakWithAClearBlueSky02a06cf6Ae7a48c49d1c9be0b54ccb140_2_Image.colorStats = hydrateColorStats(colorStats);
ASnowyMountainPeakWithAClearBlueSky02a06cf6Ae7a48c49d1c9be0b54ccb140_2_Image.texts = texts satisfies IWallpaperTexts;
