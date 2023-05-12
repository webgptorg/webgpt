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
import colorStats from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_e6fa1b37-5b36-48a7-b9d2-f7f2210214a5-0_1.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_e6fa1b37-5b36-48a7-b9d2-f7f2210214a5-0_1.json';
import texts from './Pavol_Hejn_a_photograph_of_a_mountain_range_on_another_planet_w_e6fa1b37-5b36-48a7-b9d2-f7f2210214a5-0_1.texts.json';

/**
 * Image of A photograph of a mountain range on another planet, with the bright sun shining through the peaks.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMountainRangeOnAnotherPlanetWE6fa1b375b3648a7B9d2F7f2210214a50_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a mountain range on another planet, with the bright sun shining through the peaks."
            src="https://cdn.midjourney.com/e6fa1b37-5b36-48a7-b9d2-f7f2210214a5/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAMountainRangeOnAnotherPlanetWE6fa1b375b3648a7B9d2F7f2210214a50_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMountainRangeOnAnotherPlanetWE6fa1b375b3648a7B9d2F7f2210214a50_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAMountainRangeOnAnotherPlanetWE6fa1b375b3648a7B9d2F7f2210214a50_1_Image.texts =
    texts satisfies IWallpaperTexts;
