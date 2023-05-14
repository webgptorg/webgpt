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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_0.colors.json';
import content from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_0.content.md';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_0.json';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration."
            src="https://cdn.midjourney.com/4c1392d3-9c3a-4ec5-ae52-fa7682e73f86/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.src = new URL(
    'https://cdn.midjourney.com/4c1392d3-9c3a-4ec5-ae52-fa7682e73f86/0_0.png',
);
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_0_Image.content = content;
