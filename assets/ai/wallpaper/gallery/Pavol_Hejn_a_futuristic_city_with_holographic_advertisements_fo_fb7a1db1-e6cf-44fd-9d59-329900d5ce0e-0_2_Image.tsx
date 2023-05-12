/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/fb7a1db1-e6cf-44fd-9d59-329900d5ce0e/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_fb7a1db1-e6cf-44fd-9d59-329900d5ce0e-0_2.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_fb7a1db1-e6cf-44fd-9d59-329900d5ce0e-0_2.json';
import texts from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_fb7a1db1-e6cf-44fd-9d59-329900d5ce0e-0_2.texts.json';

/**
 * Image of A futuristic city with holographic advertisements for a tech or innovation website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityWithHolographicAdvertisementsFoFb7a1db1E6cf44fd9d59329900d5ce0e0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic city with holographic advertisements for a tech or innovation website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityWithHolographicAdvertisementsFoFb7a1db1E6cf44fd9d59329900d5ce0e0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityWithHolographicAdvertisementsFoFb7a1db1E6cf44fd9d59329900d5ce0e0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityWithHolographicAdvertisementsFoFb7a1db1E6cf44fd9d59329900d5ce0e0_2_Image.texts =
    texts satisfies IWallpaperTexts;
