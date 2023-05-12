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
import colorStats from './Pavol_Hejn_a_panoramic_image_of_a_mountain_range_with_mist_and__a954f85c-12dd-42db-a40f-98a05a5d7e62-0_0.colors.json';
import metadata from './Pavol_Hejn_a_panoramic_image_of_a_mountain_range_with_mist_and__a954f85c-12dd-42db-a40f-98a05a5d7e62-0_0.json';
import texts from './Pavol_Hejn_a_panoramic_image_of_a_mountain_range_with_mist_and__a954f85c-12dd-42db-a40f-98a05a5d7e62-0_0.texts.json';

/**
 * Image of A panoramic image of a mountain range, with mist and clouds drifting through the peaks.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APanoramicImageOfAMountainRangeWithMistAndA954f85c12dd42dbA40f98a05a5d7e620_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A panoramic image of a mountain range, with mist and clouds drifting through the peaks."
            src="https://cdn.midjourney.com/a954f85c-12dd-42db-a40f-98a05a5d7e62/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APanoramicImageOfAMountainRangeWithMistAndA954f85c12dd42dbA40f98a05a5d7e620_0_Image.src = new URL(
    'https://cdn.midjourney.com/a954f85c-12dd-42db-a40f-98a05a5d7e62/0_0.png',
);
APanoramicImageOfAMountainRangeWithMistAndA954f85c12dd42dbA40f98a05a5d7e620_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APanoramicImageOfAMountainRangeWithMistAndA954f85c12dd42dbA40f98a05a5d7e620_0_Image.colorStats =
    hydrateColorStats(colorStats);
APanoramicImageOfAMountainRangeWithMistAndA954f85c12dd42dbA40f98a05a5d7e620_0_Image.texts =
    texts satisfies IWallpaperTexts;
