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
import colorStats from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_3.colors.json';
import content from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_3.content.md';
import metadata from './Pavol_Hejn_a_pop_art_style_wallpaper_featuring_a_comic_book_sty_3bf6e02b-00f9-4960-b0e9-963454b085d4-0_3.json';

/**
 * Image of A pop art-style wallpaper featuring a comic book-style illustration of a futuristic robot or cyborg.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APopArtStyleWallpaperFeaturingAComicBookStybf6e02b00f94960B0e9963454b085d403_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pop art-style wallpaper featuring a comic book-style illustration of a futuristic robot or cyborg."
            src="https://cdn.midjourney.com/3bf6e02b-00f9-4960-b0e9-963454b085d4/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APopArtStyleWallpaperFeaturingAComicBookStybf6e02b00f94960B0e9963454b085d403_3_Image.src = new URL(
    'https://cdn.midjourney.com/3bf6e02b-00f9-4960-b0e9-963454b085d4/0_3.png',
);
APopArtStyleWallpaperFeaturingAComicBookStybf6e02b00f94960B0e9963454b085d403_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APopArtStyleWallpaperFeaturingAComicBookStybf6e02b00f94960B0e9963454b085d403_3_Image.colorStats =
    hydrateColorStats(colorStats);
APopArtStyleWallpaperFeaturingAComicBookStybf6e02b00f94960B0e9963454b085d403_3_Image.content = content;
