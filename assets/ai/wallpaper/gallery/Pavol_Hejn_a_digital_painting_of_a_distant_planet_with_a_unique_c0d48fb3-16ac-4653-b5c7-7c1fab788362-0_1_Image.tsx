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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_1.colors.json';
import content from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_1.content.md';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_distant_planet_with_a_unique_c0d48fb3-16ac-4653-b5c7-7c1fab788362-0_1.json';

/**
 * Image of A digital painting of a distant planet, with a unique atmosphere and unusual terrain.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a distant planet, with a unique atmosphere and unusual terrain."
            src="https://cdn.midjourney.com/c0d48fb3-16ac-4653-b5c7-7c1fab788362/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_1_Image.src = new URL(
    'https://cdn.midjourney.com/c0d48fb3-16ac-4653-b5c7-7c1fab788362/0_1.png',
);
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADistantPlanetWithAUniqueC0d48fb316ac4653B5c77c1fab7883620_1_Image.content = content;
