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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__14ca8ac8-f38c-4c7f-81c1-689269008b6d-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__14ca8ac8-f38c-4c7f-81c1-689269008b6d-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__14ca8ac8-f38c-4c7f-81c1-689269008b6d-0_2.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA14ca8ac8F38c4c7f81c1689269008b6d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts."
            src="https://cdn.midjourney.com/14ca8ac8-f38c-4c7f-81c1-689269008b6d/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAnAbstractIllustrationOfA14ca8ac8F38c4c7f81c1689269008b6d0_2_Image.src = new URL(
    'https://cdn.midjourney.com/14ca8ac8-f38c-4c7f-81c1-689269008b6d/0_2.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfA14ca8ac8F38c4c7f81c1689269008b6d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA14ca8ac8F38c4c7f81c1689269008b6d0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA14ca8ac8F38c4c7f81c1689269008b6d0_2_Image.content = content;
