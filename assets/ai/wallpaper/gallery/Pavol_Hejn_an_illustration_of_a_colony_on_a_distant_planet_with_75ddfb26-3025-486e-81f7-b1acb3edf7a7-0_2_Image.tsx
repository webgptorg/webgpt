/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/75ddfb26-3025-486e-81f7-b1acb3edf7a7/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_75ddfb26-3025-486e-81f7-b1acb3edf7a7-0_2.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_75ddfb26-3025-486e-81f7-b1acb3edf7a7-0_2.json';
import texts from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_75ddfb26-3025-486e-81f7-b1acb3edf7a7-0_2.texts.json';

/**
 * Image of An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAColonyOnADistantPlanetWith75ddfb263025486e81f7B1acb3edf7a70_2_Image.texts =
    texts satisfies IWallpaperTexts;
