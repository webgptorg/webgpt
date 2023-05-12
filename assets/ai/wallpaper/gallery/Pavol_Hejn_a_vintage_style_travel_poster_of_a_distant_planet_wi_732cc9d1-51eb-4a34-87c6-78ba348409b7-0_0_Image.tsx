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
import colorStats from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_732cc9d1-51eb-4a34-87c6-78ba348409b7-0_0.colors.json';
import metadata from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_732cc9d1-51eb-4a34-87c6-78ba348409b7-0_0.json';
import texts from './Pavol_Hejn_a_vintage_style_travel_poster_of_a_distant_planet_wi_732cc9d1-51eb-4a34-87c6-78ba348409b7-0_0.texts.json';

/**
 * Image of A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleTravelPosterOfADistantPlanetWi732cc9d151eb4a3487c678ba348409b70_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style travel poster of a distant planet, with bold typography and an artistic rendering of the landscape."
            src="https://cdn.midjourney.com/732cc9d1-51eb-4a34-87c6-78ba348409b7/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVintageStyleTravelPosterOfADistantPlanetWi732cc9d151eb4a3487c678ba348409b70_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleTravelPosterOfADistantPlanetWi732cc9d151eb4a3487c678ba348409b70_0_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageStyleTravelPosterOfADistantPlanetWi732cc9d151eb4a3487c678ba348409b70_0_Image.texts =
    texts satisfies IWallpaperTexts;
