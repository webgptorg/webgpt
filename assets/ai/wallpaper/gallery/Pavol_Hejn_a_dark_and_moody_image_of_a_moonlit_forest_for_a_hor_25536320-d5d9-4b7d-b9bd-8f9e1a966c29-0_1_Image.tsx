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
import colorStats from './Pavol_Hejn_a_dark_and_moody_image_of_a_moonlit_forest_for_a_hor_25536320-d5d9-4b7d-b9bd-8f9e1a966c29-0_1.colors.json';
import content from './Pavol_Hejn_a_dark_and_moody_image_of_a_moonlit_forest_for_a_hor_25536320-d5d9-4b7d-b9bd-8f9e1a966c29-0_1.content.md';
import metadata from './Pavol_Hejn_a_dark_and_moody_image_of_a_moonlit_forest_for_a_hor_25536320-d5d9-4b7d-b9bd-8f9e1a966c29-0_1.json';

/**
 * Image of A dark and moody image of a moonlit forest for a horror or supernatural website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADarkAndMoodyImageOfAMoonlitForestForAHor25536320D5d94b7dB9bd8f9e1a966c290_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dark and moody image of a moonlit forest for a horror or supernatural website"
            src="https://cdn.midjourney.com/25536320-d5d9-4b7d-b9bd-8f9e1a966c29/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADarkAndMoodyImageOfAMoonlitForestForAHor25536320D5d94b7dB9bd8f9e1a966c290_1_Image.src = new URL(
    'https://cdn.midjourney.com/25536320-d5d9-4b7d-b9bd-8f9e1a966c29/0_1.png',
);
ADarkAndMoodyImageOfAMoonlitForestForAHor25536320D5d94b7dB9bd8f9e1a966c290_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADarkAndMoodyImageOfAMoonlitForestForAHor25536320D5d94b7dB9bd8f9e1a966c290_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADarkAndMoodyImageOfAMoonlitForestForAHor25536320D5d94b7dB9bd8f9e1a966c290_1_Image.content = content;
