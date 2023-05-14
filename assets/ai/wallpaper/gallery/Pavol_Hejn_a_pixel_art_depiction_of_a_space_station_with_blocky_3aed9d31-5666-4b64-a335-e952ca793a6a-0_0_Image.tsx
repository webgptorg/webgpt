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
import { IWallpaperComponentProps, IWallpaperMetadata } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_0.colors.json';
import content from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_0.content.md';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_space_station_with_blocky_3aed9d31-5666-4b64-a335-e952ca793a6a-0_0.json';

/**
 * Image of A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a space station, with blocky shapes and limited colors that create a retro and futuristic feel."
            src="https://cdn.midjourney.com/3aed9d31-5666-4b64-a335-e952ca793a6a/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_0_Image.src = new URL(
    'https://cdn.midjourney.com/3aed9d31-5666-4b64-a335-e952ca793a6a/0_0.png',
);
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_0_Image.colorStats =
    hydrateColorStats(colorStats);
APixelArtDepictionOfASpaceStationWithBlocky3aed9d3156664b64A335E952ca793a6a0_0_Image.content = content;
