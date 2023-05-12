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
import colorStats from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_d3a04846-1641-4c76-93e4-f21152a6aa2d-0_1.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_d3a04846-1641-4c76-93e4-f21152a6aa2d-0_1.json';
import texts from './Pavol_Hejn_a_futuristic_city_with_holographic_advertisements_fo_d3a04846-1641-4c76-93e4-f21152a6aa2d-0_1.texts.json';

/**
 * Image of A futuristic city with holographic advertisements for a tech or innovation website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic city with holographic advertisements for a tech or innovation website"
            src="https://cdn.midjourney.com/d3a04846-1641-4c76-93e4-f21152a6aa2d/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityWithHolographicAdvertisementsFoD3a0484616414c7693e4F21152a6aa2d0_1_Image.texts =
    texts satisfies IWallpaperTexts;
