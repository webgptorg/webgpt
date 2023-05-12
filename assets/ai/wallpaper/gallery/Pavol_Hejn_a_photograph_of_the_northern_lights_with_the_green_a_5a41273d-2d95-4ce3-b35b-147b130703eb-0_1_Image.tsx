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
import colorStats from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_1.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_1.json';
import texts from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_5a41273d-2d95-4ce3-b35b-147b130703eb-0_1.texts.json';

/**
 * Image of A photograph of the Northern Lights, with the green and purple hues swirling in the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of the Northern Lights, with the green and purple hues swirling in the night sky."
            src="https://cdn.midjourney.com/5a41273d-2d95-4ce3-b35b-147b130703eb/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfTheNorthernLightsWithTheGreenA5a41273d2d954ce3B35b147b130703eb0_1_Image.texts =
    texts satisfies IWallpaperTexts;
