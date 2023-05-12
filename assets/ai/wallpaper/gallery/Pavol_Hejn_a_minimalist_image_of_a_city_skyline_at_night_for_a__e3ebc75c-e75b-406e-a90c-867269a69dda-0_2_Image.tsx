/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/e3ebc75c-e75b-406e-a90c-867269a69dda/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__e3ebc75c-e75b-406e-a90c-867269a69dda-0_2.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__e3ebc75c-e75b-406e-a90c-867269a69dda-0_2.json';
import texts from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__e3ebc75c-e75b-406e-a90c-867269a69dda-0_2.texts.json';

/**
 * Image of A minimalist image of a city skyline at night for a real estate or architecture website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist image of a city skyline at night for a real estate or architecture website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistImageOfACitySkylineAtNightForAE3ebc75cE75b406eA90c867269a69dda0_2_Image.texts =
    texts satisfies IWallpaperTexts;
