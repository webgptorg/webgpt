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
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_1.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_1.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3ead49fc-4cdb-4252-a4b1-32368cb20d10-0_1.texts.json';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface."
            src="https://cdn.midjourney.com/3ead49fc-4cdb-4252-a4b1-32368cb20d10/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfASpaceshipApproachingAnAli3ead49fc4cdb4252A4b132368cb20d100_1_Image.texts =
    texts satisfies IWallpaperTexts;
