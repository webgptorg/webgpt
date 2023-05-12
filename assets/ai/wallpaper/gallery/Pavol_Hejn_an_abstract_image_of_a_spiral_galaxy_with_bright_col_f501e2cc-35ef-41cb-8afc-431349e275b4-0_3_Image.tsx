/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/f501e2cc-35ef-41cb-8afc-431349e275b4/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_f501e2cc-35ef-41cb-8afc-431349e275b4-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_f501e2cc-35ef-41cb-8afc-431349e275b4-0_3.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_f501e2cc-35ef-41cb-8afc-431349e275b4-0_3.texts.json';

/**
 * Image of An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASpiralGalaxyWithBrightColF501e2cc35ef41cb8afc431349e275b40_3_Image.texts =
    texts satisfies IWallpaperTexts;
