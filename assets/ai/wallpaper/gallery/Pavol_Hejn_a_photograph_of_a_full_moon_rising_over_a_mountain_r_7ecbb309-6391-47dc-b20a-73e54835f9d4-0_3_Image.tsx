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
import colorStats from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_7ecbb309-6391-47dc-b20a-73e54835f9d4-0_3.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_7ecbb309-6391-47dc-b20a-73e54835f9d4-0_3.json';
import texts from './Pavol_Hejn_a_photograph_of_a_full_moon_rising_over_a_mountain_r_7ecbb309-6391-47dc-b20a-73e54835f9d4-0_3.texts.json';

/**
 * Image of A photograph of a full moon rising over a mountain range, with mist and clouds adding to the sense of mystery.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAFullMoonRisingOverAMountainR7ecbb309639147dcB20a73e54835f9d40_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a full moon rising over a mountain range, with mist and clouds adding to the sense of mystery."
            src="https://cdn.midjourney.com/7ecbb309-6391-47dc-b20a-73e54835f9d4/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAFullMoonRisingOverAMountainR7ecbb309639147dcB20a73e54835f9d40_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAFullMoonRisingOverAMountainR7ecbb309639147dcB20a73e54835f9d40_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAFullMoonRisingOverAMountainR7ecbb309639147dcB20a73e54835f9d40_3_Image.texts =
    texts satisfies IWallpaperTexts;
