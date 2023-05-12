/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/28906a88-93f4-4a82-a337-516c808f3408/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_28906a88-93f4-4a82-a337-516c808f3408-0_2.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_28906a88-93f4-4a82-a337-516c808f3408-0_2.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_28906a88-93f4-4a82-a337-516c808f3408-0_2.texts.json';

/**
 * Image of An abstract image of a swirling galaxy, with bright colors and intricate patterns.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASwirlingGalaxyWithBrightC8906a8893f44a82A337516c808f340802_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a swirling galaxy, with bright colors and intricate patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASwirlingGalaxyWithBrightC8906a8893f44a82A337516c808f340802_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASwirlingGalaxyWithBrightC8906a8893f44a82A337516c808f340802_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASwirlingGalaxyWithBrightC8906a8893f44a82A337516c808f340802_2_Image.texts =
    texts satisfies IWallpaperTexts;
