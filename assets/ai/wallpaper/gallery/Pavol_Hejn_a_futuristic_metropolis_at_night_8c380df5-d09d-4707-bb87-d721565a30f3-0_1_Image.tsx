/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/8c380df5-d09d-4707-bb87-d721565a30f3/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_metropolis_at_night_8c380df5-d09d-4707-bb87-d721565a30f3-0_1.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_metropolis_at_night_8c380df5-d09d-4707-bb87-d721565a30f3-0_1.json';
import texts from './Pavol_Hejn_a_futuristic_metropolis_at_night_8c380df5-d09d-4707-bb87-d721565a30f3-0_1.texts.json';

/**
 * Image of A futuristic metropolis at night
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticMetropolisAtNight8c380df5D09d4707Bb87D721565a30f30_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic metropolis at night"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticMetropolisAtNight8c380df5D09d4707Bb87D721565a30f30_1_Image.metadata = metadata satisfies IWallpaperMetadata;
AFuturisticMetropolisAtNight8c380df5D09d4707Bb87D721565a30f30_1_Image.colorStats = hydrateColorStats(colorStats);
AFuturisticMetropolisAtNight8c380df5D09d4707Bb87D721565a30f30_1_Image.texts = texts satisfies IWallpaperTexts;
