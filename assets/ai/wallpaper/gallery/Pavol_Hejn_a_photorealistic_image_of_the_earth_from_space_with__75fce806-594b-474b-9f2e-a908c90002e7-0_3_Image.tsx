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
import colorStats from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__75fce806-594b-474b-9f2e-a908c90002e7-0_3.colors.json';
import metadata from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__75fce806-594b-474b-9f2e-a908c90002e7-0_3.json';
import texts from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__75fce806-594b-474b-9f2e-a908c90002e7-0_3.texts.json';

/**
 * Image of A photorealistic image of the Earth from space, with vibrant colors and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotorealisticImageOfTheEarthFromSpaceWith75fce806594b474b9f2eA908c90002e70_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photorealistic image of the Earth from space, with vibrant colors and intricate details."
            src="https://cdn.midjourney.com/75fce806-594b-474b-9f2e-a908c90002e7/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotorealisticImageOfTheEarthFromSpaceWith75fce806594b474b9f2eA908c90002e70_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotorealisticImageOfTheEarthFromSpaceWith75fce806594b474b9f2eA908c90002e70_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotorealisticImageOfTheEarthFromSpaceWith75fce806594b474b9f2eA908c90002e70_3_Image.texts =
    texts satisfies IWallpaperTexts;
