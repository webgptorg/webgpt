/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/7741f2e5-613f-49de-b6fa-6553b2394494/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_0.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_0.json';
import texts from './Pavol_Hejn_a_futuristic_cityscape_with_holographic_billboards_a_7741f2e5-613f-49de-b6fa-6553b2394494-0_0.texts.json';

/**
 * Image of A futuristic cityscape with holographic billboards and flying cars
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape with holographic billboards and flying cars"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_0_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityscapeWithHolographicBillboardsA7741f2e5613f49deB6fa6553b23944940_0_Image.texts =
    texts satisfies IWallpaperTexts;
