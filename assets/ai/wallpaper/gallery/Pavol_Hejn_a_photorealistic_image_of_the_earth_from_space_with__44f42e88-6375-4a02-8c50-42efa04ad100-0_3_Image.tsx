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
import colorStats from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__44f42e88-6375-4a02-8c50-42efa04ad100-0_3.colors.json';
import metadata from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__44f42e88-6375-4a02-8c50-42efa04ad100-0_3.json';
import texts from './Pavol_Hejn_a_photorealistic_image_of_the_earth_from_space_with__44f42e88-6375-4a02-8c50-42efa04ad100-0_3.texts.json';

/**
 * Image of A photorealistic image of the Earth from space, with vibrant colors and intricate details.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotorealisticImageOfTheEarthFromSpaceWith44f42e8863754a028c5042efa04ad1000_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photorealistic image of the Earth from space, with vibrant colors and intricate details."
            src="https://cdn.midjourney.com/44f42e88-6375-4a02-8c50-42efa04ad100/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotorealisticImageOfTheEarthFromSpaceWith44f42e8863754a028c5042efa04ad1000_3_Image.src = new URL(
    'https://cdn.midjourney.com/44f42e88-6375-4a02-8c50-42efa04ad100/0_3.png',
);
APhotorealisticImageOfTheEarthFromSpaceWith44f42e8863754a028c5042efa04ad1000_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotorealisticImageOfTheEarthFromSpaceWith44f42e8863754a028c5042efa04ad1000_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotorealisticImageOfTheEarthFromSpaceWith44f42e8863754a028c5042efa04ad1000_3_Image.texts =
    texts satisfies IWallpaperTexts;
