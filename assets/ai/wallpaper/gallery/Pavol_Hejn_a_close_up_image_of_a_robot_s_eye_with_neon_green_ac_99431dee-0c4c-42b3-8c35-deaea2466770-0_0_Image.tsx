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
import colorStats from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_99431dee-0c4c-42b3-8c35-deaea2466770-0_0.colors.json';
import metadata from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_99431dee-0c4c-42b3-8c35-deaea2466770-0_0.json';
import texts from './Pavol_Hejn_a_close_up_image_of_a_robot_s_eye_with_neon_green_ac_99431dee-0c4c-42b3-8c35-deaea2466770-0_0.texts.json';

/**
 * Image of A close-up image of a robot's eye with neon green accents
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfARobotSEyeWithNeonGreenAc99431dee0c4c42b38c35Deaea24667700_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a robot's eye with neon green accents"
            src="https://cdn.midjourney.com/99431dee-0c4c-42b3-8c35-deaea2466770/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpImageOfARobotSEyeWithNeonGreenAc99431dee0c4c42b38c35Deaea24667700_0_Image.src = new URL(
    'https://cdn.midjourney.com/99431dee-0c4c-42b3-8c35-deaea2466770/0_0.png',
);
ACloseUpImageOfARobotSEyeWithNeonGreenAc99431dee0c4c42b38c35Deaea24667700_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfARobotSEyeWithNeonGreenAc99431dee0c4c42b38c35Deaea24667700_0_Image.colorStats =
    hydrateColorStats(colorStats);
ACloseUpImageOfARobotSEyeWithNeonGreenAc99431dee0c4c42b38c35Deaea24667700_0_Image.texts =
    texts satisfies IWallpaperTexts;
