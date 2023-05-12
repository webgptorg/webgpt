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
import colorStats from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_380486d5-af02-4d6b-ae31-e4f04a6c3580-0_0.colors.json';
import metadata from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_380486d5-af02-4d6b-ae31-e4f04a6c3580-0_0.json';
import texts from './Pavol_Hejn_a_dreamy_forest_scene_with_fairies_380486d5-af02-4d6b-ae31-e4f04a6c3580-0_0.texts.json';

/**
 * Image of A dreamy forest scene with fairies
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy forest scene with fairies"
            src="https://cdn.midjourney.com/380486d5-af02-4d6b-ae31-e4f04a6c3580/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.src = new URL(
    'https://cdn.midjourney.com/380486d5-af02-4d6b-ae31-e4f04a6c3580/0_0.png',
);
ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.colorStats = hydrateColorStats(colorStats);
ADreamyForestSceneWithFairies380486d5Af024d6bAe31E4f04a6c35800_0_Image.texts = texts satisfies IWallpaperTexts;
