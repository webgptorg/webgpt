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
import colorStats from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_37267751-5121-44b4-b98a-3d8e2e6ea256-0_3.colors.json';
import metadata from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_37267751-5121-44b4-b98a-3d8e2e6ea256-0_3.json';
import texts from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_37267751-5121-44b4-b98a-3d8e2e6ea256-0_3.texts.json';

/**
 * Image of A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfABlackHoleWithTheDistortedS7267751512144b4B98a3d8e2e6ea25603_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity."
            src="https://cdn.midjourney.com/37267751-5121-44b4-b98a-3d8e2e6ea256/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalImageOfABlackHoleWithTheDistortedS7267751512144b4B98a3d8e2e6ea25603_3_Image.src = new URL(
    'https://cdn.midjourney.com/37267751-5121-44b4-b98a-3d8e2e6ea256/0_3.png',
);
ADigitalImageOfABlackHoleWithTheDistortedS7267751512144b4B98a3d8e2e6ea25603_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfABlackHoleWithTheDistortedS7267751512144b4B98a3d8e2e6ea25603_3_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalImageOfABlackHoleWithTheDistortedS7267751512144b4B98a3d8e2e6ea25603_3_Image.texts =
    texts satisfies IWallpaperTexts;
