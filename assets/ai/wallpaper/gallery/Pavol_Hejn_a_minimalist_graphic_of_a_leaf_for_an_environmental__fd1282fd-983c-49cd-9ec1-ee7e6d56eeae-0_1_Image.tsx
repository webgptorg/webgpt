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
import { IWallpaperComponentProps, IWallpaperMetadata } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_leaf_for_an_environmental__fd1282fd-983c-49cd-9ec1-ee7e6d56eeae-0_1.colors.json';
import content from './Pavol_Hejn_a_minimalist_graphic_of_a_leaf_for_an_environmental__fd1282fd-983c-49cd-9ec1-ee7e6d56eeae-0_1.content.md';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_leaf_for_an_environmental__fd1282fd-983c-49cd-9ec1-ee7e6d56eeae-0_1.json';

/**
 * Image of A minimalist graphic of a leaf for an environmental or sustainable living website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a leaf for an environmental or sustainable living website"
            src="https://cdn.midjourney.com/fd1282fd-983c-49cd-9ec1-ee7e6d56eeae/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_1_Image.src = new URL(
    'https://cdn.midjourney.com/fd1282fd-983c-49cd-9ec1-ee7e6d56eeae/0_1.png',
);
AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfALeafForAnEnvironmentalFd1282fd983c49cd9ec1Ee7e6d56eeae0_1_Image.content = content;
