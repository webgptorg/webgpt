/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */
import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_33100479-eeef-4d4e-ae2e-79349c0d6f43-0_3.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_33100479-eeef-4d4e-ae2e-79349c0d6f43-0_3.json';
import texts from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_33100479-eeef-4d4e-ae2e-79349c0d6f43-0_3.texts.json';

/**
 * Image of A futuristic city with holographic advertisements for a tech or innovation website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityWithHolographicAdvertisementsFo3100479Eeef4d4eAe2e79349c0d6f4303_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic city with holographic advertisements for a tech or innovation website"
            src="https://cdn.midjourney.com/33100479-eeef-4d4e-ae2e-79349c0d6f43/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityWithHolographicAdvertisementsFo3100479Eeef4d4eAe2e79349c0d6f4303_3_Image.src = new URL(
    'https://cdn.midjourney.com/33100479-eeef-4d4e-ae2e-79349c0d6f43/0_3.png',
);
AFuturisticCityWithHolographicAdvertisementsFo3100479Eeef4d4eAe2e79349c0d6f4303_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityWithHolographicAdvertisementsFo3100479Eeef4d4eAe2e79349c0d6f4303_3_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityWithHolographicAdvertisementsFo3100479Eeef4d4eAe2e79349c0d6f4303_3_Image.texts =
    texts satisfies IWallpaperTexts;
