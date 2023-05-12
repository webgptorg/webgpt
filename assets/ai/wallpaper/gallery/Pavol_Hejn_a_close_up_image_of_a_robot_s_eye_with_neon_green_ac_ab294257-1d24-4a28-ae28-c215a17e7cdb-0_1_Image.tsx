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
import colorStats from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_ab294257-1d24-4a28-ae28-c215a17e7cdb-0_1.colors.json';
import metadata from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_ab294257-1d24-4a28-ae28-c215a17e7cdb-0_1.json';
import texts from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_ab294257-1d24-4a28-ae28-c215a17e7cdb-0_1.texts.json';

/**
 * Image of A close-up image of a robot's eye with neon green accents
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfARobotSEyeWithNeonGreenAcAb2942571d244a28Ae28C215a17e7cdb0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a robot's eye with neon green accents"
            src="https://cdn.midjourney.com/ab294257-1d24-4a28-ae28-c215a17e7cdb/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpImageOfARobotSEyeWithNeonGreenAcAb2942571d244a28Ae28C215a17e7cdb0_1_Image.src = new URL(
    'https://cdn.midjourney.com/ab294257-1d24-4a28-ae28-c215a17e7cdb/0_1.png',
);
ACloseUpImageOfARobotSEyeWithNeonGreenAcAb2942571d244a28Ae28C215a17e7cdb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfARobotSEyeWithNeonGreenAcAb2942571d244a28Ae28C215a17e7cdb0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ACloseUpImageOfARobotSEyeWithNeonGreenAcAb2942571d244a28Ae28C215a17e7cdb0_1_Image.texts =
    texts satisfies IWallpaperTexts;
