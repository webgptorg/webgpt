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
import colorStats from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_f3279063-69af-44f4-96f2-40d2ba7b78d0-0_2.colors.json';
import content from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_f3279063-69af-44f4-96f2-40d2ba7b78d0-0_2.content.md';
import metadata from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_f3279063-69af-44f4-96f2-40d2ba7b78d0-0_2.json';

/**
 * Image of A surreal image of a floating island with a waterfall for a travel blog or agency
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAFloatingIslandWithAWaterfalF327906369af44f496f240d2ba7b78d00_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a floating island with a waterfall for a travel blog or agency"
            src="https://cdn.midjourney.com/f3279063-69af-44f4-96f2-40d2ba7b78d0/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealImageOfAFloatingIslandWithAWaterfalF327906369af44f496f240d2ba7b78d00_2_Image.src = new URL(
    'https://cdn.midjourney.com/f3279063-69af-44f4-96f2-40d2ba7b78d0/0_2.png',
);
ASurrealImageOfAFloatingIslandWithAWaterfalF327906369af44f496f240d2ba7b78d00_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAFloatingIslandWithAWaterfalF327906369af44f496f240d2ba7b78d00_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealImageOfAFloatingIslandWithAWaterfalF327906369af44f496f240d2ba7b78d00_2_Image.content = content;
