/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/c0d48fb3-16ac-4653-b5c7-7c1fab788362/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_2.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_2.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_2.texts.json';

/**
 * Image of A digital painting of a distant planet, with a unique atmosphere and unusual terrain.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image(
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

ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_2_Image.texts =
    texts satisfies IWallpaperTexts;
