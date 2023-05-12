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
import colorStats from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_f1483f79-cac5-40f3-acb1-e1c890323077-0_1.colors.json';
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_f1483f79-cac5-40f3-acb1-e1c890323077-0_1.json';
import texts from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_city_skyli_f1483f79-cac5-40f3-acb1-e1c890323077-0_1.texts.json';

/**
 * Image of A dramatic image of a thunderstorm over a city skyline for a weather or news website.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a thunderstorm over a city skyline for a weather or news website."
            src="https://cdn.midjourney.com/f1483f79-cac5-40f3-acb1-e1c890323077/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_1_Image.src = new URL(
    'https://cdn.midjourney.com/f1483f79-cac5-40f3-acb1-e1c890323077/0_1.png',
);
ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADramaticImageOfAThunderstormOverACitySkyliF1483f79Cac540f3Acb1E1c8903230770_1_Image.texts =
    texts satisfies IWallpaperTexts;
