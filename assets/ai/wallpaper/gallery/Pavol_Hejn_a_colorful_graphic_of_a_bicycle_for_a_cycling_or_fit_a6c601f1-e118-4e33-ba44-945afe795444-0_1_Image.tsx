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
import colorStats from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_a6c601f1-e118-4e33-ba44-945afe795444-0_1.colors.json';
import content from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_a6c601f1-e118-4e33-ba44-945afe795444-0_1.content.md';
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_for_a_cycling_or_fit_a6c601f1-e118-4e33-ba44-945afe795444-0_1.json';

/**
 * Image of A colorful graphic of a bicycle for a cycling or fitness blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABicycleForACyclingOrFitA6c601f1E1184e33Ba44945afe7954440_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a bicycle for a cycling or fitness blog"
            src="https://cdn.midjourney.com/a6c601f1-e118-4e33-ba44-945afe795444/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AColorfulGraphicOfABicycleForACyclingOrFitA6c601f1E1184e33Ba44945afe7954440_1_Image.src = new URL(
    'https://cdn.midjourney.com/a6c601f1-e118-4e33-ba44-945afe795444/0_1.png',
);
AColorfulGraphicOfABicycleForACyclingOrFitA6c601f1E1184e33Ba44945afe7954440_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABicycleForACyclingOrFitA6c601f1E1184e33Ba44945afe7954440_1_Image.colorStats =
    hydrateColorStats(colorStats);
AColorfulGraphicOfABicycleForACyclingOrFitA6c601f1E1184e33Ba44945afe7954440_1_Image.content = content;
