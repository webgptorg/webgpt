/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/07f80492-8232-469b-be96-2bcd8deff72d/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_2.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_2.json';
import texts from './Pavol_Hejn_an_illustration_of_a_robotic_explorer_with_metallic__07f80492-8232-469b-be96-2bcd8deff72d-0_2.texts.json';

/**
 * Image of An illustration of a robotic explorer, with metallic textures and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a robotic explorer, with metallic textures and intricate details."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfARoboticExplorerWithMetallic07f804928232469bBe962bcd8deff72d0_2_Image.texts =
    texts satisfies IWallpaperTexts;
