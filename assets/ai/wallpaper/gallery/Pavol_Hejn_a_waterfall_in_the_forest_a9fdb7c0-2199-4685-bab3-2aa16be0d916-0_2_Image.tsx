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
import colorStats from './Pavol_Hejn_a_waterfall_in_the_forest_a9fdb7c0-2199-4685-bab3-2aa16be0d916-0_2.colors.json';
import metadata from './Pavol_Hejn_a_waterfall_in_the_forest_a9fdb7c0-2199-4685-bab3-2aa16be0d916-0_2.json';
import texts from './Pavol_Hejn_a_waterfall_in_the_forest_a9fdb7c0-2199-4685-bab3-2aa16be0d916-0_2.texts.json';

/**
 * Image of A waterfall in the forest
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWaterfallInTheForestA9fdb7c021994685Bab32aa16be0d9160_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A waterfall in the forest"
            src="https://cdn.midjourney.com/a9fdb7c0-2199-4685-bab3-2aa16be0d916/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWaterfallInTheForestA9fdb7c021994685Bab32aa16be0d9160_2_Image.metadata = metadata satisfies IWallpaperMetadata;
AWaterfallInTheForestA9fdb7c021994685Bab32aa16be0d9160_2_Image.colorStats = hydrateColorStats(colorStats);
AWaterfallInTheForestA9fdb7c021994685Bab32aa16be0d9160_2_Image.texts = texts satisfies IWallpaperTexts;
