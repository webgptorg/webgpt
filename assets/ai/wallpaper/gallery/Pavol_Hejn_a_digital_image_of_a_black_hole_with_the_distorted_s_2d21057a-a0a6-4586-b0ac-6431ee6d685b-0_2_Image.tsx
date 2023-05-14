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
import colorStats from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_2d21057a-a0a6-4586-b0ac-6431ee6d685b-0_2.colors.json';
import content from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_2d21057a-a0a6-4586-b0ac-6431ee6d685b-0_2.content.md';
import metadata from './Pavol_Hejn_a_digital_image_of_a_black_hole_with_the_distorted_s_2d21057a-a0a6-4586-b0ac-6431ee6d685b-0_2.json';

/**
 * Image of A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfABlackHoleWithTheDistortedSd21057aA0a64586B0ac6431ee6d685b02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a black hole, with the distorted shapes and bright colors representing the extreme gravity."
            src="https://cdn.midjourney.com/2d21057a-a0a6-4586-b0ac-6431ee6d685b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalImageOfABlackHoleWithTheDistortedSd21057aA0a64586B0ac6431ee6d685b02_2_Image.src = new URL(
    'https://cdn.midjourney.com/2d21057a-a0a6-4586-b0ac-6431ee6d685b/0_2.png',
);
ADigitalImageOfABlackHoleWithTheDistortedSd21057aA0a64586B0ac6431ee6d685b02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfABlackHoleWithTheDistortedSd21057aA0a64586B0ac6431ee6d685b02_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalImageOfABlackHoleWithTheDistortedSd21057aA0a64586B0ac6431ee6d685b02_2_Image.content = content;
