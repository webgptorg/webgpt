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
import colorStats from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_edd3b628-6c8f-47c7-9285-9802a5f7220a-0_3.colors.json';
import metadata from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_edd3b628-6c8f-47c7-9285-9802a5f7220a-0_3.json';
import texts from './Pavol_Hejn_a_pixel_art_inspired_wallpaper_featuring_a_retro_sty_edd3b628-6c8f-47c7-9285-9802a5f7220a-0_3.texts.json';

/**
 * Image of A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APixelArtInspiredWallpaperFeaturingARetroStyEdd3b6286c8f47c792859802a5f7220a0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art-inspired wallpaper featuring a retro-style robot, with a limited color palette and pixelated lines."
            src="https://cdn.midjourney.com/edd3b628-6c8f-47c7-9285-9802a5f7220a/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtInspiredWallpaperFeaturingARetroStyEdd3b6286c8f47c792859802a5f7220a0_3_Image.src = new URL(
    'https://cdn.midjourney.com/edd3b628-6c8f-47c7-9285-9802a5f7220a/0_3.png',
);
APixelArtInspiredWallpaperFeaturingARetroStyEdd3b6286c8f47c792859802a5f7220a0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtInspiredWallpaperFeaturingARetroStyEdd3b6286c8f47c792859802a5f7220a0_3_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtInspiredWallpaperFeaturingARetroStyEdd3b6286c8f47c792859802a5f7220a0_3_Image.texts =
    texts satisfies IWallpaperTexts;
