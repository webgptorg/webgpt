/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/a0b9767c-d19e-401b-b7e0-8d87ea78ffc1/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a0b9767c-d19e-401b-b7e0-8d87ea78ffc1-0_1.colors.json';
import metadata from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a0b9767c-d19e-401b-b7e0-8d87ea78ffc1-0_1.json';
import texts from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_a0b9767c-d19e-401b-b7e0-8d87ea78ffc1-0_1.texts.json';

/**
 * Image of A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_1_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageMapOfTheStarsAndConstellationsWithDA0b9767cD19e401bB7e08d87ea78ffc10_1_Image.texts =
    texts satisfies IWallpaperTexts;
