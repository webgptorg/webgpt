/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/ac936a4d-5a61-4989-ae96-8b0cd757ddcd/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_ac936a4d-5a61-4989-ae96-8b0cd757ddcd-0_1.colors.json';
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_ac936a4d-5a61-4989-ae96-8b0cd757ddcd-0_1.json';
import texts from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_ac936a4d-5a61-4989-ae96-8b0cd757ddcd-0_1.texts.json';

/**
 * Image of A dramatic image of a thunderstorm over a city skyline for a weather or news website.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAThunderstormOverACitySkyliAc936a4d5a614989Ae968b0cd757ddcd0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a thunderstorm over a city skyline for a weather or news website."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAThunderstormOverACitySkyliAc936a4d5a614989Ae968b0cd757ddcd0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAThunderstormOverACitySkyliAc936a4d5a614989Ae968b0cd757ddcd0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADramaticImageOfAThunderstormOverACitySkyliAc936a4d5a614989Ae968b0cd757ddcd0_1_Image.texts =
    texts satisfies IWallpaperTexts;
