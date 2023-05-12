/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/5d35abac-1784-485f-a1a6-c977eb05e835/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_2.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_2.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_5d35abac-1784-485f-a1a6-c977eb05e835-0_2.texts.json';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfALoneAstronautStandingOnT5d35abac1784485fA1a6C977eb05e8350_2_Image.texts =
    texts satisfies IWallpaperTexts;
