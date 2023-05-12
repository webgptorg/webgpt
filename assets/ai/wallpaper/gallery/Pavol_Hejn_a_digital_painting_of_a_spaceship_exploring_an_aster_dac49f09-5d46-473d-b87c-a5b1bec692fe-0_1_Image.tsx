/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/dac49f09-5d46-473d-b87c-a5b1bec692fe/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_spaceship_exploring_an_aster_dac49f09-5d46-473d-b87c-a5b1bec692fe-0_1.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_exploring_an_aster_dac49f09-5d46-473d-b87c-a5b1bec692fe-0_1.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_spaceship_exploring_an_aster_dac49f09-5d46-473d-b87c-a5b1bec692fe-0_1.texts.json';

/**
 * Image of A digital painting of a spaceship exploring an asteroid field, with the rocky terrain and dangerous debris creating a sense of adventure and challenge.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipExploringAnAsterDac49f095d46473dB87cA5b1bec692fe0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship exploring an asteroid field, with the rocky terrain and dangerous debris creating a sense of adventure and challenge."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipExploringAnAsterDac49f095d46473dB87cA5b1bec692fe0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipExploringAnAsterDac49f095d46473dB87cA5b1bec692fe0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfASpaceshipExploringAnAsterDac49f095d46473dB87cA5b1bec692fe0_1_Image.texts =
    texts satisfies IWallpaperTexts;
