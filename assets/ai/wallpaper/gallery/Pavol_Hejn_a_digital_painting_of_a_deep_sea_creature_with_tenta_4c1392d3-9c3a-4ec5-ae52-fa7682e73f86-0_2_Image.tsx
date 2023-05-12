/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/4c1392d3-9c3a-4ec5-ae52-fa7682e73f86/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_2.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_2.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_4c1392d3-9c3a-4ec5-ae52-fa7682e73f86-0_2.texts.json';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADeepSeaCreatureWithTenta4c1392d39c3a4ec5Ae52Fa7682e73f860_2_Image.texts =
    texts satisfies IWallpaperTexts;
