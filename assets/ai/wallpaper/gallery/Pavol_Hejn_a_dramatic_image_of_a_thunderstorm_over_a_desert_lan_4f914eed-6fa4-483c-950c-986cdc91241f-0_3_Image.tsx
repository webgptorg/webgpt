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
import colorStats from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_desert_lan_4f914eed-6fa4-483c-950c-986cdc91241f-0_3.colors.json';
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_desert_lan_4f914eed-6fa4-483c-950c-986cdc91241f-0_3.json';
import texts from './Pavol_Hejn_a_dramatic_image_of_a_thunderstorm_over_a_desert_lan_4f914eed-6fa4-483c-950c-986cdc91241f-0_3.texts.json';

/**
 * Image of A dramatic image of a thunderstorm over a desert landscape for a weather or news website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAThunderstormOverADesertLan4f914eed6fa4483c950c986cdc91241f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a thunderstorm over a desert landscape for a weather or news website"
            src="https://cdn.midjourney.com/4f914eed-6fa4-483c-950c-986cdc91241f/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAThunderstormOverADesertLan4f914eed6fa4483c950c986cdc91241f0_3_Image.src = new URL(
    'https://cdn.midjourney.com/4f914eed-6fa4-483c-950c-986cdc91241f/0_3.png',
);
ADramaticImageOfAThunderstormOverADesertLan4f914eed6fa4483c950c986cdc91241f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAThunderstormOverADesertLan4f914eed6fa4483c950c986cdc91241f0_3_Image.colorStats =
    hydrateColorStats(colorStats);
ADramaticImageOfAThunderstormOverADesertLan4f914eed6fa4483c950c986cdc91241f0_3_Image.texts =
    texts satisfies IWallpaperTexts;
