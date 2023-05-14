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
import colorStats from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_3e978d5e-d172-4d88-b8ce-ca47712dbac6-0_2.colors.json';
import content from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_3e978d5e-d172-4d88-b8ce-ca47712dbac6-0_2.content.md';
import metadata from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_3e978d5e-d172-4d88-b8ce-ca47712dbac6-0_2.json';

/**
 * Image of A dreamy watercolor painting of a field of flowers for a wedding or event planning website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADreamyWatercolorPaintingOfAFieldOfFlowersF3e978d5eD1724d88B8ceCa47712dbac60_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy watercolor painting of a field of flowers for a wedding or event planning website"
            src="https://cdn.midjourney.com/3e978d5e-d172-4d88-b8ce-ca47712dbac6/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADreamyWatercolorPaintingOfAFieldOfFlowersF3e978d5eD1724d88B8ceCa47712dbac60_2_Image.src = new URL(
    'https://cdn.midjourney.com/3e978d5e-d172-4d88-b8ce-ca47712dbac6/0_2.png',
);
ADreamyWatercolorPaintingOfAFieldOfFlowersF3e978d5eD1724d88B8ceCa47712dbac60_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyWatercolorPaintingOfAFieldOfFlowersF3e978d5eD1724d88B8ceCa47712dbac60_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADreamyWatercolorPaintingOfAFieldOfFlowersF3e978d5eD1724d88B8ceCa47712dbac60_2_Image.content = content;
