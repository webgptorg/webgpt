/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */
import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_aa634d61-c204-4d53-8f9a-5baeda93c670-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_aa634d61-c204-4d53-8f9a-5baeda93c670-0_3.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_spiral_galaxy_with_bright_col_aa634d61-c204-4d53-8f9a-5baeda93c670-0_3.texts.json';

/**
 * Image of An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a spiral galaxy, with bright colors and swirling patterns that evoke a sense of movement and depth."
            src="https://cdn.midjourney.com/aa634d61-c204-4d53-8f9a-5baeda93c670/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASpiralGalaxyWithBrightColAa634d61C2044d538f9a5baeda93c6700_3_Image.texts =
    texts satisfies IWallpaperTexts;
