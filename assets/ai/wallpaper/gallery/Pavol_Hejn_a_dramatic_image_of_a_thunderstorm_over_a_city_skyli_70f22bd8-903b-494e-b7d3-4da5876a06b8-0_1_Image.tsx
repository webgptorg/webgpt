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
import colorStats from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_70f22bd8-903b-494e-b7d3-4da5876a06b8-0_1.colors.json';
import content from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_70f22bd8-903b-494e-b7d3-4da5876a06b8-0_1.content.md';
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_70f22bd8-903b-494e-b7d3-4da5876a06b8-0_1.json';

/**
 * Image of A dramatic image of a thunderstorm over a city skyline for a weather or news website.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAThunderstormOverACitySkyli70f22bd8903b494eB7d34da5876a06b80_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a thunderstorm over a city skyline for a weather or news website."
            src="https://cdn.midjourney.com/70f22bd8-903b-494e-b7d3-4da5876a06b8/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADramaticImageOfAThunderstormOverACitySkyli70f22bd8903b494eB7d34da5876a06b80_1_Image.src = new URL(
    'https://cdn.midjourney.com/70f22bd8-903b-494e-b7d3-4da5876a06b8/0_1.png',
);
ADramaticImageOfAThunderstormOverACitySkyli70f22bd8903b494eB7d34da5876a06b80_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAThunderstormOverACitySkyli70f22bd8903b494eB7d34da5876a06b80_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADramaticImageOfAThunderstormOverACitySkyli70f22bd8903b494eB7d34da5876a06b80_1_Image.content = content;
