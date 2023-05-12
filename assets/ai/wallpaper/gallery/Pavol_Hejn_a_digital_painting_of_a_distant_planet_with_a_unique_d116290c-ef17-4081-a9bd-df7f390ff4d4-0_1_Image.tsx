/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/d116290c-ef17-4081-a9bd-df7f390ff4d4/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_d116290c-ef17-4081-a9bd-df7f390ff4d4-0_1.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_d116290c-ef17-4081-a9bd-df7f390ff4d4-0_1.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_d116290c-ef17-4081-a9bd-df7f390ff4d4-0_1.texts.json';

/**
 * Image of A digital painting of a distant planet, with a unique atmosphere and unusual terrain.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADistantPlanetWithAUniqueD116290cEf174081A9bdDf7f390ff4d40_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a distant planet, with a unique atmosphere and unusual terrain."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfADistantPlanetWithAUniqueD116290cEf174081A9bdDf7f390ff4d40_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADistantPlanetWithAUniqueD116290cEf174081A9bdDf7f390ff4d40_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADistantPlanetWithAUniqueD116290cEf174081A9bdDf7f390ff4d40_1_Image.texts =
    texts satisfies IWallpaperTexts;
