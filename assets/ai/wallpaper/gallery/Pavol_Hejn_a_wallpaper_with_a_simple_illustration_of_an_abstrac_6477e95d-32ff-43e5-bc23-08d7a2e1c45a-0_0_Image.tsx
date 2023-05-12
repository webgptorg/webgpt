/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/6477e95d-32ff-43e5-bc23-08d7a2e1c45a/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_an_abstrac_6477e95d-32ff-43e5-bc23-08d7a2e1c45a-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_an_abstrac_6477e95d-32ff-43e5-bc23-08d7a2e1c45a-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_illustration_of_an_abstrac_6477e95d-32ff-43e5-bc23-08d7a2e1c45a-0_0.texts.json';

/**
 * Image of A wallpaper with a simple illustration of an abstract network, in a minimal color palette of black and white.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple illustration of an abstract network, in a minimal color palette of black and white."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleIllustrationOfAnAbstrac6477e95d32ff43e5Bc2308d7a2e1c45a0_0_Image.texts =
    texts satisfies IWallpaperTexts;
