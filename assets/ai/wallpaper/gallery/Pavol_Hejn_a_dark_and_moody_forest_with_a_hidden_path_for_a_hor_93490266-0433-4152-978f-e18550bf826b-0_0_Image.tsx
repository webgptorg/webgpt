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
import colorStats from './Pavol_Hejn_a_dark_and_moody_forest_with_a_hidden_path_for_a_hor_93490266-0433-4152-978f-e18550bf826b-0_0.colors.json';
import metadata from './Pavol_Hejn_a_dark_and_moody_forest_with_a_hidden_path_for_a_hor_93490266-0433-4152-978f-e18550bf826b-0_0.json';
import texts from './Pavol_Hejn_a_dark_and_moody_forest_with_a_hidden_path_for_a_hor_93490266-0433-4152-978f-e18550bf826b-0_0.texts.json';

/**
 * Image of A dark and moody forest with a hidden path for a horror or mystery website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADarkAndMoodyForestWithAHiddenPathForAHor9349026604334152978fE18550bf826b0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dark and moody forest with a hidden path for a horror or mystery website"
            src="https://cdn.midjourney.com/93490266-0433-4152-978f-e18550bf826b/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADarkAndMoodyForestWithAHiddenPathForAHor9349026604334152978fE18550bf826b0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADarkAndMoodyForestWithAHiddenPathForAHor9349026604334152978fE18550bf826b0_0_Image.colorStats =
    hydrateColorStats(colorStats);
ADarkAndMoodyForestWithAHiddenPathForAHor9349026604334152978fE18550bf826b0_0_Image.texts =
    texts satisfies IWallpaperTexts;
