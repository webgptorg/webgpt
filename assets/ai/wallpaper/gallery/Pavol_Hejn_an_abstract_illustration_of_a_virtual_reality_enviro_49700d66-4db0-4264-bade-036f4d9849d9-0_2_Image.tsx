/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/49700d66-4db0-4264-bade-036f4d9849d9/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_49700d66-4db0-4264-bade-036f4d9849d9-0_2.colors.json';
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_49700d66-4db0-4264-bade-036f4d9849d9-0_2.json';
import texts from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_49700d66-4db0-4264-bade-036f4d9849d9-0_2.texts.json';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviro49700d664db04264Bade036f4d9849d90_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAVirtualRealityEnviro49700d664db04264Bade036f4d9849d90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviro49700d664db04264Bade036f4d9849d90_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractIllustrationOfAVirtualRealityEnviro49700d664db04264Bade036f4d9849d90_2_Image.texts =
    texts satisfies IWallpaperTexts;
