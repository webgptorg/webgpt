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
import colorStats from './Pavol_Hejn_a_colorful_graphic_of_a_retro_rocket_ship_for_a_scie_74f5f0ba-c83a-444c-87e0-daee13062c1f-0_2.colors.json';
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_retro_rocket_ship_for_a_scie_74f5f0ba-c83a-444c-87e0-daee13062c1f-0_2.json';
import texts from './Pavol_Hejn_a_colorful_graphic_of_a_retro_rocket_ship_for_a_scie_74f5f0ba-c83a-444c-87e0-daee13062c1f-0_2.texts.json';

/**
 * Image of A colorful graphic of a retro rocket ship for a science or space exploration website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfARetroRocketShipForAScie74f5f0baC83a444c87e0Daee13062c1f0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a retro rocket ship for a science or space exploration website"
            src="https://cdn.midjourney.com/74f5f0ba-c83a-444c-87e0-daee13062c1f/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AColorfulGraphicOfARetroRocketShipForAScie74f5f0baC83a444c87e0Daee13062c1f0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfARetroRocketShipForAScie74f5f0baC83a444c87e0Daee13062c1f0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AColorfulGraphicOfARetroRocketShipForAScie74f5f0baC83a444c87e0Daee13062c1f0_2_Image.texts =
    texts satisfies IWallpaperTexts;
