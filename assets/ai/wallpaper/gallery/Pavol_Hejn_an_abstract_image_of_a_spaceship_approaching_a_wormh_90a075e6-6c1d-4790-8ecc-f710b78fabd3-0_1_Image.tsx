/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/90a075e6-6c1d-4790-8ecc-f710b78fabd3/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_90a075e6-6c1d-4790-8ecc-f710b78fabd3-0_1.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_90a075e6-6c1d-4790-8ecc-f710b78fabd3-0_1.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_spaceship_approaching_a_wormh_90a075e6-6c1d-4790-8ecc-f710b78fabd3-0_1.texts.json';

/**
 * Image of An abstract image of a spaceship approaching a wormhole, with bright colors and distorted shapes.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spaceship approaching a wormhole, with bright colors and distorted shapes."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASpaceshipApproachingAWormh90a075e66c1d47908eccF710b78fabd30_1_Image.texts =
    texts satisfies IWallpaperTexts;
