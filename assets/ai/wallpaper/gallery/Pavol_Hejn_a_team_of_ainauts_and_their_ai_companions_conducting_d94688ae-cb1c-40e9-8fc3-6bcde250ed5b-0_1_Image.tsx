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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_d94688ae-cb1c-40e9-8fc3-6bcde250ed5b-0_1.colors.json';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_d94688ae-cb1c-40e9-8fc3-6bcde250ed5b-0_1.json';
import texts from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_d94688ae-cb1c-40e9-8fc3-6bcde250ed5b-0_1.texts.json';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the edge of a black hole, with time and space warping around them.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConductingD94688aeCb1c40e98fc36bcde250ed5b0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions conducting experiments on the edge of a black hole, with time and space warping around them."
            src="https://cdn.midjourney.com/d94688ae-cb1c-40e9-8fc3-6bcde250ed5b/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsConductingD94688aeCb1c40e98fc36bcde250ed5b0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConductingD94688aeCb1c40e98fc36bcde250ed5b0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsConductingD94688aeCb1c40e98fc36bcde250ed5b0_1_Image.texts =
    texts satisfies IWallpaperTexts;
