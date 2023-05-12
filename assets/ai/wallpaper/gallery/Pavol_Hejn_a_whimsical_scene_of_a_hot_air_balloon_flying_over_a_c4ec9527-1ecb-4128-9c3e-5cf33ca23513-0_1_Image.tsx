/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/c4ec9527-1ecb-4128-9c3e-5cf33ca23513/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_c4ec9527-1ecb-4128-9c3e-5cf33ca23513-0_1.colors.json';
import metadata from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_c4ec9527-1ecb-4128-9c3e-5cf33ca23513-0_1.json';
import texts from './Pavol_Hejn_a_whimsical_scene_of_a_hot_air_balloon_flying_over_a_c4ec9527-1ecb-4128-9c3e-5cf33ca23513-0_1.texts.json';

/**
 * Image of A whimsical scene of a hot air balloon flying over a city for a lifestyle or adventure website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalSceneOfAHotAirBalloonFlyingOverAC4ec95271ecb41289c3e5cf33ca235130_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical scene of a hot air balloon flying over a city for a lifestyle or adventure website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWhimsicalSceneOfAHotAirBalloonFlyingOverAC4ec95271ecb41289c3e5cf33ca235130_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalSceneOfAHotAirBalloonFlyingOverAC4ec95271ecb41289c3e5cf33ca235130_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalSceneOfAHotAirBalloonFlyingOverAC4ec95271ecb41289c3e5cf33ca235130_1_Image.texts =
    texts satisfies IWallpaperTexts;
