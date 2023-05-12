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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_drone_ag_95660e98-b69e-4c6b-816b-e38b37c78808-0_1.texts.json';

/**
 * Image of A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single line drawing of a drone, against a background of geometric shapes in complementary colors."
            src="https://cdn.midjourney.com/95660e98-b69e-4c6b-816b-e38b37c78808/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.src = new URL(
    'https://cdn.midjourney.com/95660e98-b69e-4c6b-816b-e38b37c78808/0_1.png',
);
AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASingleLineDrawingOfADroneAg95660e98B69e4c6b816bE38b37c788080_1_Image.texts =
    texts satisfies IWallpaperTexts;
