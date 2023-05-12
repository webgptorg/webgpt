/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/c9639a0d-476f-41a3-97f6-4fb8ef3df043/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_c9639a0d-476f-41a3-97f6-4fb8ef3df043-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_c9639a0d-476f-41a3-97f6-4fb8ef3df043-0_3.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_spaceship_traveling_through_a_c9639a0d-476f-41a3-97f6-4fb8ef3df043-0_3.texts.json';

/**
 * Image of An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spaceship traveling through a wormhole, with bright colors and surreal patterns."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASpaceshipTravelingThroughAC9639a0d476f41a397f64fb8ef3df0430_3_Image.texts =
    texts satisfies IWallpaperTexts;
