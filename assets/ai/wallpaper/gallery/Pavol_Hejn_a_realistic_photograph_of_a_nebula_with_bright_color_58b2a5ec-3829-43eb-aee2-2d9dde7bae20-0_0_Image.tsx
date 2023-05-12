/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/58b2a5ec-3829-43eb-aee2-2d9dde7bae20/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_58b2a5ec-3829-43eb-aee2-2d9dde7bae20-0_0.colors.json';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_58b2a5ec-3829-43eb-aee2-2d9dde7bae20-0_0.json';
import texts from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_58b2a5ec-3829-43eb-aee2-2d9dde7bae20-0_0.texts.json';

/**
 * Image of A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfANebulaWithBrightColor58b2a5ec382943ebAee22d9dde7bae200_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARealisticPhotographOfANebulaWithBrightColor58b2a5ec382943ebAee22d9dde7bae200_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfANebulaWithBrightColor58b2a5ec382943ebAee22d9dde7bae200_0_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfANebulaWithBrightColor58b2a5ec382943ebAee22d9dde7bae200_0_Image.texts =
    texts satisfies IWallpaperTexts;
