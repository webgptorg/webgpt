/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/a31cea03-0c58-431e-ab57-d4a3eaa6922c/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__a31cea03-0c58-431e-ab57-d4a3eaa6922c-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__a31cea03-0c58-431e-ab57-d4a3eaa6922c-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__a31cea03-0c58-431e-ab57-d4a3eaa6922c-0_1.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic data visualization, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic data visualization, with sleek and modern graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfAA31cea030c58431eAb57D4a3eaa6922c0_1_Image.texts =
    texts satisfies IWallpaperTexts;
