/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/ace658aa-b449-4617-b8dc-c354ad881a09/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_photograph_of_a_starry_night_sky_with_the_milky_wa_ace658aa-b449-4617-b8dc-c354ad881a09-0_2.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_starry_night_sky_with_the_milky_wa_ace658aa-b449-4617-b8dc-c354ad881a09-0_2.json';
import texts from './Pavol_Hejn_a_photograph_of_a_starry_night_sky_with_the_milky_wa_ace658aa-b449-4617-b8dc-c354ad881a09-0_2.texts.json';

/**
 * Image of A photograph of a starry night sky, with the Milky Way galaxy visible overhead.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a starry night sky, with the Milky Way galaxy visible overhead."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAStarryNightSkyWithTheMilkyWaAce658aaB4494617B8dcC354ad881a090_2_Image.texts =
    texts satisfies IWallpaperTexts;
