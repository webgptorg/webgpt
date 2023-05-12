/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/13c60b2e-6dca-484e-80ca-1854f0f15250/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_0.colors.json';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_0.json';
import texts from './Pavol_Hejn_a_black_and_white_outline_of_a_telescope_with_clean__13c60b2e-6dca-484e-80ca-1854f0f15250-0_0.texts.json';

/**
 * Image of A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of a telescope, with clean lines and simple shapes that highlight the intricate mechanics of the instrument."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_0_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfATelescopeWithClean13c60b2e6dca484e80ca1854f0f152500_0_Image.texts =
    texts satisfies IWallpaperTexts;
