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
import colorStats from './Pavol_Hejn_a_close_up_of_a_leaf_with_dew_drops_a24d7eec-f404-4df9-9594-6eb0cd7be208-0_0.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_leaf_with_dew_drops_a24d7eec-f404-4df9-9594-6eb0cd7be208-0_0.json';
import texts from './Pavol_Hejn_a_close_up_of_a_leaf_with_dew_drops_a24d7eec-f404-4df9-9594-6eb0cd7be208-0_0.texts.json';

/**
 * Image of A close-up of a leaf with dew drops
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a leaf with dew drops"
            src="https://cdn.midjourney.com/a24d7eec-f404-4df9-9594-6eb0cd7be208/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_0_Image.src = new URL(
    'https://cdn.midjourney.com/a24d7eec-f404-4df9-9594-6eb0cd7be208/0_0.png',
);
ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_0_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfALeafWithDewDropsA24d7eecF4044df995946eb0cd7be2080_0_Image.texts = texts satisfies IWallpaperTexts;
