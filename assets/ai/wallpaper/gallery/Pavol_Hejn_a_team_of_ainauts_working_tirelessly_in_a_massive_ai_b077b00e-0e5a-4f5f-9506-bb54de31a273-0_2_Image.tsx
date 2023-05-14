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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_working_tirelessly_in_a_massive_ai_b077b00e-0e5a-4f5f-9506-bb54de31a273-0_2.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_working_tirelessly_in_a_massive_ai_b077b00e-0e5a-4f5f-9506-bb54de31a273-0_2.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_working_tirelessly_in_a_massive_ai_b077b00e-0e5a-4f5f-9506-bb54de31a273-0_2.json';

/**
 * Image of A team of AInauts working tirelessly in a massive AI factory, creating new and innovative technologies for the future.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts working tirelessly in a massive AI factory, creating new and innovative technologies for the future."
            src="https://cdn.midjourney.com/b077b00e-0e5a-4f5f-9506-bb54de31a273/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_2_Image.src = new URL(
    'https://cdn.midjourney.com/b077b00e-0e5a-4f5f-9506-bb54de31a273/0_2.png',
);
ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_2_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsWorkingTirelesslyInAMassiveAiB077b00e0e5a4f5f9506Bb54de31a2730_2_Image.content = content;
