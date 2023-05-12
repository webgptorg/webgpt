/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/a3a1e89a-4784-4093-abcd-af3f5d142c65/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_a3a1e89a-4784-4093-abcd-af3f5d142c65-0_0.colors.json';
import metadata from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_a3a1e89a-4784-4093-abcd-af3f5d142c65-0_0.json';
import texts from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_a3a1e89a-4784-4093-abcd-af3f5d142c65-0_0.texts.json';

/**
 * Image of A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_0_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageStyleTravelPosterOfADistantPlanetWiA3a1e89a47844093AbcdAf3f5d142c650_0_Image.texts =
    texts satisfies IWallpaperTexts;
