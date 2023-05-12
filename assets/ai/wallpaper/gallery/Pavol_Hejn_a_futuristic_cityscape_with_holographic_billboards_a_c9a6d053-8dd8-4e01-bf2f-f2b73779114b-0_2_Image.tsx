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
import colorStats from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_c9a6d053-8dd8-4e01-bf2f-f2b73779114b-0_2.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_c9a6d053-8dd8-4e01-bf2f-f2b73779114b-0_2.json';
import texts from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_c9a6d053-8dd8-4e01-bf2f-f2b73779114b-0_2.texts.json';

/**
 * Image of A futuristic cityscape with holographic billboards and flying cars
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWithHolographicBillboardsAC9a6d0538dd84e01Bf2fF2b73779114b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape with holographic billboards and flying cars"
            src="https://cdn.midjourney.com/c9a6d053-8dd8-4e01-bf2f-f2b73779114b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWithHolographicBillboardsAC9a6d0538dd84e01Bf2fF2b73779114b0_2_Image.src = new URL(
    'https://cdn.midjourney.com/c9a6d053-8dd8-4e01-bf2f-f2b73779114b/0_2.png',
);
AFuturisticCityscapeWithHolographicBillboardsAC9a6d0538dd84e01Bf2fF2b73779114b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWithHolographicBillboardsAC9a6d0538dd84e01Bf2fF2b73779114b0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityscapeWithHolographicBillboardsAC9a6d0538dd84e01Bf2fF2b73779114b0_2_Image.texts =
    texts satisfies IWallpaperTexts;
