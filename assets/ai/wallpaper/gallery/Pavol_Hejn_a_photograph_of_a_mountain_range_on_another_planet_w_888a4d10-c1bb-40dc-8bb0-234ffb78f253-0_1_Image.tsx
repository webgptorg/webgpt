/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/888a4d10-c1bb-40dc-8bb0-234ffb78f253/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_888a4d10-c1bb-40dc-8bb0-234ffb78f253-0_1.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_888a4d10-c1bb-40dc-8bb0-234ffb78f253-0_1.json';
import texts from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_888a4d10-c1bb-40dc-8bb0-234ffb78f253-0_1.texts.json';

/**
 * Image of A photograph of a mountain range on another planet, with the bright sun shining through the peaks.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMountainRangeOnAnotherPlanetW888a4d10C1bb40dc8bb0234ffb78f2530_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a mountain range on another planet, with the bright sun shining through the peaks."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAMountainRangeOnAnotherPlanetW888a4d10C1bb40dc8bb0234ffb78f2530_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMountainRangeOnAnotherPlanetW888a4d10C1bb40dc8bb0234ffb78f2530_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAMountainRangeOnAnotherPlanetW888a4d10C1bb40dc8bb0234ffb78f2530_1_Image.texts =
    texts satisfies IWallpaperTexts;
