/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/60e3628f-a049-46e6-85f4-a8fa2cc0d39a/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_60e3628f-a049-46e6-85f4-a8fa2cc0d39a-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_60e3628f-a049-46e6-85f4-a8fa2cc0d39a-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_60e3628f-a049-46e6-85f4-a8fa2cc0d39a-0_0.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn60e3628fA04946e685f4A8fa2cc0d39a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI-powered search engine, with a minimalist and modern design, set against a gradient background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn60e3628fA04946e685f4A8fa2cc0d39a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn60e3628fA04946e685f4A8fa2cc0d39a0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfAn60e3628fA04946e685f4A8fa2cc0d39a0_0_Image.texts =
    texts satisfies IWallpaperTexts;
