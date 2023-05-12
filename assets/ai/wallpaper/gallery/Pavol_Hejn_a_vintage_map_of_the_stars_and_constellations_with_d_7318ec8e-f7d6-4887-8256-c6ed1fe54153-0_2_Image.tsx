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
import colorStats from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_7318ec8e-f7d6-4887-8256-c6ed1fe54153-0_2.colors.json';
import metadata from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_7318ec8e-f7d6-4887-8256-c6ed1fe54153-0_2.json';
import texts from './Pavol_Hejn_a_vintage_map_of_the_stars_and_constellations_with_d_7318ec8e-f7d6-4887-8256-c6ed1fe54153-0_2.texts.json';

/**
 * Image of A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AVintageMapOfTheStarsAndConstellationsWithD7318ec8eF7d648878256C6ed1fe541530_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage map of the stars and constellations, with detailed illustrations of spacecraft and celestial bodies."
            src="https://cdn.midjourney.com/7318ec8e-f7d6-4887-8256-c6ed1fe54153/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageMapOfTheStarsAndConstellationsWithD7318ec8eF7d648878256C6ed1fe541530_2_Image.src = new URL(
    'https://cdn.midjourney.com/7318ec8e-f7d6-4887-8256-c6ed1fe54153/0_2.png',
);
AVintageMapOfTheStarsAndConstellationsWithD7318ec8eF7d648878256C6ed1fe541530_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageMapOfTheStarsAndConstellationsWithD7318ec8eF7d648878256C6ed1fe541530_2_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageMapOfTheStarsAndConstellationsWithD7318ec8eF7d648878256C6ed1fe541530_2_Image.texts =
    texts satisfies IWallpaperTexts;
