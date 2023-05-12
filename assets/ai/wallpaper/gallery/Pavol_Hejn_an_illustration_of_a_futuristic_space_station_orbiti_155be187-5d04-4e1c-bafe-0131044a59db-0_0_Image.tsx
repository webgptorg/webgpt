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
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_155be187-5d04-4e1c-bafe-0131044a59db-0_0.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_155be187-5d04-4e1c-bafe-0131044a59db-0_0.json';
import texts from './Pavol_Hejn_an_illustration_of_a_futuristic_space_station_orbiti_155be187-5d04-4e1c-bafe-0131044a59db-0_0.texts.json';

/**
 * Image of An illustration of a futuristic space station orbiting a distant planet, with sleek lines and metallic accents.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticSpaceStationOrbiti155be1875d044e1cBafe0131044a59db0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic space station orbiting a distant planet, with sleek lines and metallic accents."
            src="https://cdn.midjourney.com/155be187-5d04-4e1c-bafe-0131044a59db/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticSpaceStationOrbiti155be1875d044e1cBafe0131044a59db0_0_Image.src = new URL(
    'https://cdn.midjourney.com/155be187-5d04-4e1c-bafe-0131044a59db/0_0.png',
);
AnIllustrationOfAFuturisticSpaceStationOrbiti155be1875d044e1cBafe0131044a59db0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticSpaceStationOrbiti155be1875d044e1cBafe0131044a59db0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticSpaceStationOrbiti155be1875d044e1cBafe0131044a59db0_0_Image.texts =
    texts satisfies IWallpaperTexts;
