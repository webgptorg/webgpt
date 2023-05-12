/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/5a0e1d68-48f6-429a-8ede-1ec13d97221c/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__5a0e1d68-48f6-429a-8ede-1ec13d97221c-0_0.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__5a0e1d68-48f6-429a-8ede-1ec13d97221c-0_0.json';
import texts from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__5a0e1d68-48f6-429a-8ede-1ec13d97221c-0_0.texts.json';

/**
 * Image of A photograph of a meteor shower, with bright streaks of light crossing the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMeteorShowerWithBrightStreaks5a0e1d6848f6429a8ede1ec13d97221c0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a meteor shower, with bright streaks of light crossing the night sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAMeteorShowerWithBrightStreaks5a0e1d6848f6429a8ede1ec13d97221c0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMeteorShowerWithBrightStreaks5a0e1d6848f6429a8ede1ec13d97221c0_0_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAMeteorShowerWithBrightStreaks5a0e1d6848f6429a8ede1ec13d97221c0_0_Image.texts =
    texts satisfies IWallpaperTexts;
