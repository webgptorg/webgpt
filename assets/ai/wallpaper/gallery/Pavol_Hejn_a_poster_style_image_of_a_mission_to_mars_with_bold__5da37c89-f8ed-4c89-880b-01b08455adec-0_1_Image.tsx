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
import colorStats from './Pavol_Hejn_a_poster_style_image_of_a_mission_to_mars_with_bold__5da37c89-f8ed-4c89-880b-01b08455adec-0_1.colors.json';
import metadata from './Pavol_Hejn_a_poster_style_image_of_a_mission_to_mars_with_bold__5da37c89-f8ed-4c89-880b-01b08455adec-0_1.json';
import texts from './Pavol_Hejn_a_poster_style_image_of_a_mission_to_mars_with_bold__5da37c89-f8ed-4c89-880b-01b08455adec-0_1.texts.json';

/**
 * Image of A poster-style image of a mission to Mars, with bold typography and a futuristic color scheme that represents the ambition of space exploration.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APosterStyleImageOfAMissionToMarsWithBold5da37c89F8ed4c89880b01b08455adec0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A poster-style image of a mission to Mars, with bold typography and a futuristic color scheme that represents the ambition of space exploration."
            src="https://cdn.midjourney.com/5da37c89-f8ed-4c89-880b-01b08455adec/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APosterStyleImageOfAMissionToMarsWithBold5da37c89F8ed4c89880b01b08455adec0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APosterStyleImageOfAMissionToMarsWithBold5da37c89F8ed4c89880b01b08455adec0_1_Image.colorStats =
    hydrateColorStats(colorStats);
APosterStyleImageOfAMissionToMarsWithBold5da37c89F8ed4c89880b01b08455adec0_1_Image.texts =
    texts satisfies IWallpaperTexts;
