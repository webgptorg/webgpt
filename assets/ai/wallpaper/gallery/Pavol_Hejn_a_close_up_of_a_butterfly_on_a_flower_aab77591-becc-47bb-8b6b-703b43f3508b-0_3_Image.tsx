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
import colorStats from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_aab77591-becc-47bb-8b6b-703b43f3508b-0_3.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_aab77591-becc-47bb-8b6b-703b43f3508b-0_3.json';
import texts from './Pavol_Hejn_a_close_up_of_a_butterfly_on_a_flower_aab77591-becc-47bb-8b6b-703b43f3508b-0_3.texts.json';

/**
 * Image of A close-up of a butterfly on a flower
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAButterflyOnAFlowerAab77591Becc47bb8b6b703b43f3508b0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a butterfly on a flower"
            src="https://cdn.midjourney.com/aab77591-becc-47bb-8b6b-703b43f3508b/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAButterflyOnAFlowerAab77591Becc47bb8b6b703b43f3508b0_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAButterflyOnAFlowerAab77591Becc47bb8b6b703b43f3508b0_3_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfAButterflyOnAFlowerAab77591Becc47bb8b6b703b43f3508b0_3_Image.texts = texts satisfies IWallpaperTexts;
