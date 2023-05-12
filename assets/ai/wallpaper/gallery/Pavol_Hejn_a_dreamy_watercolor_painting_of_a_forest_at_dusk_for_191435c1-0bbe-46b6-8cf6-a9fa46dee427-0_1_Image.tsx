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
import colorStats from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_forest_at_dusk_for_191435c1-0bbe-46b6-8cf6-a9fa46dee427-0_1.colors.json';
import metadata from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_forest_at_dusk_for_191435c1-0bbe-46b6-8cf6-a9fa46dee427-0_1.json';
import texts from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_forest_at_dusk_for_191435c1-0bbe-46b6-8cf6-a9fa46dee427-0_1.texts.json';

/**
 * Image of A dreamy watercolor painting of a forest at dusk for a nature or wildlife blog
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADreamyWatercolorPaintingOfAForestAtDuskFor91435c10bbe46b68cf6A9fa46dee42701_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy watercolor painting of a forest at dusk for a nature or wildlife blog"
            src="https://cdn.midjourney.com/191435c1-0bbe-46b6-8cf6-a9fa46dee427/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyWatercolorPaintingOfAForestAtDuskFor91435c10bbe46b68cf6A9fa46dee42701_1_Image.src = new URL(
    'https://cdn.midjourney.com/191435c1-0bbe-46b6-8cf6-a9fa46dee427/0_1.png',
);
ADreamyWatercolorPaintingOfAForestAtDuskFor91435c10bbe46b68cf6A9fa46dee42701_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyWatercolorPaintingOfAForestAtDuskFor91435c10bbe46b68cf6A9fa46dee42701_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADreamyWatercolorPaintingOfAForestAtDuskFor91435c10bbe46b68cf6A9fa46dee42701_1_Image.texts =
    texts satisfies IWallpaperTexts;
