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
import colorStats from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_b61e92db-6e51-44fb-a677-12d97eb38527-0_1.colors.json';
import metadata from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_b61e92db-6e51-44fb-a677-12d97eb38527-0_1.json';
import texts from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_b61e92db-6e51-44fb-a677-12d97eb38527-0_1.texts.json';

/**
 * Image of A dreamy forest scene with fairies
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy forest scene with fairies"
            src="https://cdn.midjourney.com/b61e92db-6e51-44fb-a677-12d97eb38527/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_1_Image.colorStats = hydrateColorStats(colorStats);
ADreamyForestSceneWithFairiesB61e92db6e5144fbA67712d97eb385270_1_Image.texts = texts satisfies IWallpaperTexts;
