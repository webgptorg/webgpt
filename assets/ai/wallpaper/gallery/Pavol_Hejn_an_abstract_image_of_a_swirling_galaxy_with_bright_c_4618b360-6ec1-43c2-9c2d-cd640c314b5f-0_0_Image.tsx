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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_4618b360-6ec1-43c2-9c2d-cd640c314b5f-0_0.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_4618b360-6ec1-43c2-9c2d-cd640c314b5f-0_0.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_swirling_galaxy_with_bright_c_4618b360-6ec1-43c2-9c2d-cd640c314b5f-0_0.texts.json';

/**
 * Image of An abstract image of a swirling galaxy, with bright colors and intricate patterns.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a swirling galaxy, with bright colors and intricate patterns."
            src="https://cdn.midjourney.com/4618b360-6ec1-43c2-9c2d-cd640c314b5f/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfASwirlingGalaxyWithBrightC4618b3606ec143c29c2dCd640c314b5f0_0_Image.texts =
    texts satisfies IWallpaperTexts;
