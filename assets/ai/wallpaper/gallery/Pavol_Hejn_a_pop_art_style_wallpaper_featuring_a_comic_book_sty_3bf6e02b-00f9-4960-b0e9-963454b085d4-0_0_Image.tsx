/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/3bf6e02b-00f9-4960-b0e9-963454b085d4/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_0.colors.json';
import metadata from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_0.json';
import texts from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_0.texts.json';

/**
 * Image of A pop art-style wallpaper featuring a comic book-style illustration of a futuristic robot or cyborg.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APopArtStyleWallpaperFeaturingAComicBookSty3bf6e02b00f94960B0e9963454b085d40_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pop art-style wallpaper featuring a comic book-style illustration of a futuristic robot or cyborg."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APopArtStyleWallpaperFeaturingAComicBookSty3bf6e02b00f94960B0e9963454b085d40_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APopArtStyleWallpaperFeaturingAComicBookSty3bf6e02b00f94960B0e9963454b085d40_0_Image.colorStats =
    hydrateColorStats(colorStats);
APopArtStyleWallpaperFeaturingAComicBookSty3bf6e02b00f94960B0e9963454b085d40_0_Image.texts =
    texts satisfies IWallpaperTexts;
