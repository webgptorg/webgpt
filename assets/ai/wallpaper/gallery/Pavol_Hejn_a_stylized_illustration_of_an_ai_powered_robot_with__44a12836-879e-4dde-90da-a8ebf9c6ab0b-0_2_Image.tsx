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
import colorStats from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__44a12836-879e-4dde-90da-a8ebf9c6ab0b-0_2.colors.json';
import content from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__44a12836-879e-4dde-90da-a8ebf9c6ab0b-0_2.content.md';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_an_ai_powered_robot_with__44a12836-879e-4dde-90da-a8ebf9c6ab0b-0_2.json';

/**
 * Image of A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of an AI-powered robot, with sleek and modern graphics and a minimalist color scheme."
            src="https://cdn.midjourney.com/44a12836-879e-4dde-90da-a8ebf9c6ab0b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.src = new URL(
    'https://cdn.midjourney.com/44a12836-879e-4dde-90da-a8ebf9c6ab0b/0_2.png',
);
AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedIllustrationOfAnAiPoweredRobotWith44a12836879e4dde90daA8ebf9c6ab0b0_2_Image.content = content;
