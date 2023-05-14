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
import colorStats from './Pavol_Hejn_an_underwater_scene_with_coral_and_fish_760ff8ac-0b2c-42c8-b335-bcd4eb186390-0_0.colors.json';
import content from './Pavol_Hejn_an_underwater_scene_with_coral_and_fish_760ff8ac-0b2c-42c8-b335-bcd4eb186390-0_0.content.md';
import metadata from './Pavol_Hejn_an_underwater_scene_with_coral_and_fish_760ff8ac-0b2c-42c8-b335-bcd4eb186390-0_0.json';

/**
 * Image of An underwater scene with coral and fish
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnUnderwaterSceneWithCoralAndFish760ff8ac0b2c42c8B335Bcd4eb1863900_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An underwater scene with coral and fish"
            src="https://cdn.midjourney.com/760ff8ac-0b2c-42c8-b335-bcd4eb186390/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnUnderwaterSceneWithCoralAndFish760ff8ac0b2c42c8B335Bcd4eb1863900_0_Image.src = new URL(
    'https://cdn.midjourney.com/760ff8ac-0b2c-42c8-b335-bcd4eb186390/0_0.png',
);
AnUnderwaterSceneWithCoralAndFish760ff8ac0b2c42c8B335Bcd4eb1863900_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnUnderwaterSceneWithCoralAndFish760ff8ac0b2c42c8B335Bcd4eb1863900_0_Image.colorStats = hydrateColorStats(colorStats);
AnUnderwaterSceneWithCoralAndFish760ff8ac0b2c42c8B335Bcd4eb1863900_0_Image.content = content;
