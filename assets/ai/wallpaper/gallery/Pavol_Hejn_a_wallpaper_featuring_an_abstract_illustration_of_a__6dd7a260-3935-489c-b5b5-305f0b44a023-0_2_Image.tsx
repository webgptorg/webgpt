/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/6dd7a260-3935-489c-b5b5-305f0b44a023/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__6dd7a260-3935-489c-b5b5-305f0b44a023-0_2.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA6dd7a2603935489cB5b5305f0b44a0230_2_Image.texts =
    texts satisfies IWallpaperTexts;
