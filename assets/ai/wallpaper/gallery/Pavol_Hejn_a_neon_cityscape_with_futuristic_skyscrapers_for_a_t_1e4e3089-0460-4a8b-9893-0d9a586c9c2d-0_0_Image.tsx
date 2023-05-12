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
import colorStats from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_1e4e3089-0460-4a8b-9893-0d9a586c9c2d-0_0.colors.json';
import metadata from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_1e4e3089-0460-4a8b-9893-0d9a586c9c2d-0_0.json';
import texts from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_1e4e3089-0460-4a8b-9893-0d9a586c9c2d-0_0.texts.json';

/**
 * Image of A neon cityscape with futuristic skyscrapers for a tech blog homepage
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ANeonCityscapeWithFuturisticSkyscrapersForAT1e4e308904604a8b98930d9a586c9c2d0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon cityscape with futuristic skyscrapers for a tech blog homepage"
            src="https://cdn.midjourney.com/1e4e3089-0460-4a8b-9893-0d9a586c9c2d/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ANeonCityscapeWithFuturisticSkyscrapersForAT1e4e308904604a8b98930d9a586c9c2d0_0_Image.src = new URL(
    'https://cdn.midjourney.com/1e4e3089-0460-4a8b-9893-0d9a586c9c2d/0_0.png',
);
ANeonCityscapeWithFuturisticSkyscrapersForAT1e4e308904604a8b98930d9a586c9c2d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonCityscapeWithFuturisticSkyscrapersForAT1e4e308904604a8b98930d9a586c9c2d0_0_Image.colorStats =
    hydrateColorStats(colorStats);
ANeonCityscapeWithFuturisticSkyscrapersForAT1e4e308904604a8b98930d9a586c9c2d0_0_Image.texts =
    texts satisfies IWallpaperTexts;
