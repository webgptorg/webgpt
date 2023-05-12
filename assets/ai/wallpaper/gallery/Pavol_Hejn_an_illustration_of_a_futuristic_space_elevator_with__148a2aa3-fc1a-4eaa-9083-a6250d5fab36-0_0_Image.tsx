/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/148a2aa3-fc1a-4eaa-9083-a6250d5fab36/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_0.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_0.json';
import texts from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_0.texts.json';

/**
 * Image of An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticSpaceElevatorWith148a2aa3Fc1a4eaa9083A6250d5fab360_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticSpaceElevatorWith148a2aa3Fc1a4eaa9083A6250d5fab360_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticSpaceElevatorWith148a2aa3Fc1a4eaa9083A6250d5fab360_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticSpaceElevatorWith148a2aa3Fc1a4eaa9083A6250d5fab360_0_Image.texts =
    texts satisfies IWallpaperTexts;
