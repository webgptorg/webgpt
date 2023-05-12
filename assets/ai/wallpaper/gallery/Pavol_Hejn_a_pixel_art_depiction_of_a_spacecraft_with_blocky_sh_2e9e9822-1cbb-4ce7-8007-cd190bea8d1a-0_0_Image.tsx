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
import colorStats from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_2e9e9822-1cbb-4ce7-8007-cd190bea8d1a-0_0.colors.json';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_2e9e9822-1cbb-4ce7-8007-cd190bea8d1a-0_0.json';
import texts from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_2e9e9822-1cbb-4ce7-8007-cd190bea8d1a-0_0.texts.json';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel."
            src="https://cdn.midjourney.com/2e9e9822-1cbb-4ce7-8007-cd190bea8d1a/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_0_Image.src = new URL(
    'https://cdn.midjourney.com/2e9e9822-1cbb-4ce7-8007-cd190bea8d1a/0_0.png',
);
APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_0_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtDepictionOfASpacecraftWithBlockySh2e9e98221cbb4ce78007Cd190bea8d1a0_0_Image.texts =
    texts satisfies IWallpaperTexts;
