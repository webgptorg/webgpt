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
import colorStats from './Pavol_Hejn_a_forest_with_a_misty_background_9cb8a1dc-1530-4778-b3d4-8250235a1ca8-0_2.colors.json';
import metadata from './Pavol_Hejn_a_forest_with_a_misty_background_9cb8a1dc-1530-4778-b3d4-8250235a1ca8-0_2.json';
import texts from './Pavol_Hejn_a_forest_with_a_misty_background_9cb8a1dc-1530-4778-b3d4-8250235a1ca8-0_2.texts.json';

/**
 * Image of A forest with a misty background
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A forest with a misty background"
            src="https://cdn.midjourney.com/9cb8a1dc-1530-4778-b3d4-8250235a1ca8/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_2_Image.metadata = metadata satisfies IWallpaperMetadata;
AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_2_Image.colorStats = hydrateColorStats(colorStats);
AForestWithAMistyBackground9cb8a1dc15304778B3d48250235a1ca80_2_Image.texts = texts satisfies IWallpaperTexts;
