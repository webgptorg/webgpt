/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/f92031db-c1a8-4751-be36-11640cca5b5f/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_mountain_range_with_a_clear_blue_sky_f92031db-c1a8-4751-be36-11640cca5b5f-0_3.colors.json';
import metadata from './Pavol_Hejn_a_mountain_range_with_a_clear_blue_sky_f92031db-c1a8-4751-be36-11640cca5b5f-0_3.json';
import texts from './Pavol_Hejn_a_mountain_range_with_a_clear_blue_sky_f92031db-c1a8-4751-be36-11640cca5b5f-0_3.texts.json';

/**
 * Image of A mountain range with a clear blue sky
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A mountain range with a clear blue sky"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_3_Image.colorStats = hydrateColorStats(colorStats);
AMountainRangeWithAClearBlueSkyF92031dbC1a84751Be3611640cca5b5f0_3_Image.texts = texts satisfies IWallpaperTexts;
