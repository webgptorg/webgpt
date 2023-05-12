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
import colorStats from './Pavol_Hejn_a_vibrant_graphic_of_a_peacock_for_a_fashion_or_beau_fde70dc3-bd26-4506-b6fd-11e8b250b25e-0_0.colors.json';
import metadata from './Pavol_Hejn_a_vibrant_graphic_of_a_peacock_for_a_fashion_or_beau_fde70dc3-bd26-4506-b6fd-11e8b250b25e-0_0.json';
import texts from './Pavol_Hejn_a_vibrant_graphic_of_a_peacock_for_a_fashion_or_beau_fde70dc3-bd26-4506-b6fd-11e8b250b25e-0_0.texts.json';

/**
 * Image of A vibrant graphic of a peacock for a fashion or beauty blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vibrant graphic of a peacock for a fashion or beauty blog"
            src="https://cdn.midjourney.com/fde70dc3-bd26-4506-b6fd-11e8b250b25e/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.src = new URL(
    'https://cdn.midjourney.com/fde70dc3-bd26-4506-b6fd-11e8b250b25e/0_0.png',
);
AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AVibrantGraphicOfAPeacockForAFashionOrBeauFde70dc3Bd264506B6fd11e8b250b25e0_0_Image.texts =
    texts satisfies IWallpaperTexts;
