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
import colorStats from './Pavol_Hejn_an_image_of_a_rocket_launching_into_space_with_a_tra_15133132-1b54-455e-83e5-cf87528a9c36-0_3.colors.json';
import metadata from './Pavol_Hejn_an_image_of_a_rocket_launching_into_space_with_a_tra_15133132-1b54-455e-83e5-cf87528a9c36-0_3.json';
import texts from './Pavol_Hejn_an_image_of_a_rocket_launching_into_space_with_a_tra_15133132-1b54-455e-83e5-cf87528a9c36-0_3.texts.json';

/**
 * Image of An image of a rocket launching into space with a trail of fire behind it, set against a starry sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketLaunchingIntoSpaceWithATra151331321b54455e83e5Cf87528a9c360_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An image of a rocket launching into space with a trail of fire behind it, set against a starry sky."
            src="https://cdn.midjourney.com/15133132-1b54-455e-83e5-cf87528a9c36/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnImageOfARocketLaunchingIntoSpaceWithATra151331321b54455e83e5Cf87528a9c360_3_Image.src = new URL(
    'https://cdn.midjourney.com/15133132-1b54-455e-83e5-cf87528a9c36/0_3.png',
);
AnImageOfARocketLaunchingIntoSpaceWithATra151331321b54455e83e5Cf87528a9c360_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketLaunchingIntoSpaceWithATra151331321b54455e83e5Cf87528a9c360_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnImageOfARocketLaunchingIntoSpaceWithATra151331321b54455e83e5Cf87528a9c360_3_Image.texts =
    texts satisfies IWallpaperTexts;
