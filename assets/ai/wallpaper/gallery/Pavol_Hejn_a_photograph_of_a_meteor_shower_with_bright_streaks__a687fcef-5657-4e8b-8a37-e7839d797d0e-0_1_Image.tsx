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
import colorStats from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__a687fcef-5657-4e8b-8a37-e7839d797d0e-0_1.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__a687fcef-5657-4e8b-8a37-e7839d797d0e-0_1.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_meteor_shower_with_bright_streaks__a687fcef-5657-4e8b-8a37-e7839d797d0e-0_1.json';

/**
 * Image of A photograph of a meteor shower, with bright streaks of light crossing the night sky.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a meteor shower, with bright streaks of light crossing the night sky."
            src="https://cdn.midjourney.com/a687fcef-5657-4e8b-8a37-e7839d797d0e/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_1_Image.src = new URL(
    'https://cdn.midjourney.com/a687fcef-5657-4e8b-8a37-e7839d797d0e/0_1.png',
);
APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAMeteorShowerWithBrightStreaksA687fcef56574e8b8a37E7839d797d0e0_1_Image.content = content;
