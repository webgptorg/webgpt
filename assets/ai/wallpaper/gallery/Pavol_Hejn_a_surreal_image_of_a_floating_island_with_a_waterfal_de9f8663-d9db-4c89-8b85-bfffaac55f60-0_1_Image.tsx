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
import colorStats from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_de9f8663-d9db-4c89-8b85-bfffaac55f60-0_1.colors.json';
import metadata from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_de9f8663-d9db-4c89-8b85-bfffaac55f60-0_1.json';
import texts from './Pavol_Hejn_a_surreal_image_of_a_floating_island_with_a_waterfal_de9f8663-d9db-4c89-8b85-bfffaac55f60-0_1.texts.json';

/**
 * Image of A surreal image of a floating island with a waterfall for a travel blog or agency
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAFloatingIslandWithAWaterfalDe9f8663D9db4c898b85Bfffaac55f600_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a floating island with a waterfall for a travel blog or agency"
            src="https://cdn.midjourney.com/de9f8663-d9db-4c89-8b85-bfffaac55f60/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealImageOfAFloatingIslandWithAWaterfalDe9f8663D9db4c898b85Bfffaac55f600_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAFloatingIslandWithAWaterfalDe9f8663D9db4c898b85Bfffaac55f600_1_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealImageOfAFloatingIslandWithAWaterfalDe9f8663D9db4c898b85Bfffaac55f600_1_Image.texts =
    texts satisfies IWallpaperTexts;
