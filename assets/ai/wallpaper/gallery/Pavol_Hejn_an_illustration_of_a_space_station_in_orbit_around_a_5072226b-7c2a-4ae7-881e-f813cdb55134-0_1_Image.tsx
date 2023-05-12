/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/5072226b-7c2a-4ae7-881e-f813cdb55134/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_illustration_of_a_space_station_in_orbit_around_a_5072226b-7c2a-4ae7-881e-f813cdb55134-0_1.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_space_station_in_orbit_around_a_5072226b-7c2a-4ae7-881e-f813cdb55134-0_1.json';
import texts from './Pavol_Hejn_an_illustration_of_a_space_station_in_orbit_around_a_5072226b-7c2a-4ae7-881e-f813cdb55134-0_1.texts.json';

/**
 * Image of An illustration of a space station in orbit around a gas giant planet, with rings and storms visible in the background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfASpaceStationInOrbitAroundA5072226b7c2a4ae7881eF813cdb551340_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a space station in orbit around a gas giant planet, with rings and storms visible in the background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfASpaceStationInOrbitAroundA5072226b7c2a4ae7881eF813cdb551340_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfASpaceStationInOrbitAroundA5072226b7c2a4ae7881eF813cdb551340_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfASpaceStationInOrbitAroundA5072226b7c2a4ae7881eF813cdb551340_1_Image.texts =
    texts satisfies IWallpaperTexts;
