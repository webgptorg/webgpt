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
import colorStats from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_85014640-2d2f-4978-bd3e-e678a1f60ce6-0_3.colors.json';
import content from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_85014640-2d2f-4978-bd3e-e678a1f60ce6-0_3.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_the_northern_lights_with_the_green_a_85014640-2d2f-4978-bd3e-e678a1f60ce6-0_3.json';

/**
 * Image of A photograph of the Northern Lights, with the green and purple hues swirling in the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfTheNorthernLightsWithTheGreenA850146402d2f4978Bd3eE678a1f60ce60_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of the Northern Lights, with the green and purple hues swirling in the night sky."
            src="https://cdn.midjourney.com/85014640-2d2f-4978-bd3e-e678a1f60ce6/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfTheNorthernLightsWithTheGreenA850146402d2f4978Bd3eE678a1f60ce60_3_Image.src = new URL(
    'https://cdn.midjourney.com/85014640-2d2f-4978-bd3e-e678a1f60ce6/0_3.png',
);
APhotographOfTheNorthernLightsWithTheGreenA850146402d2f4978Bd3eE678a1f60ce60_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfTheNorthernLightsWithTheGreenA850146402d2f4978Bd3eE678a1f60ce60_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfTheNorthernLightsWithTheGreenA850146402d2f4978Bd3eE678a1f60ce60_3_Image.content = content;
