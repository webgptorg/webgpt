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
import colorStats from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_2.colors.json';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_2.json';
import texts from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_2.texts.json';

/**
 * Image of A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel."
            src="https://cdn.midjourney.com/3aed9d31-5666-4b64-a335-e952ca793a6a/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_2_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_2_Image.texts =
    texts satisfies IWallpaperTexts;
