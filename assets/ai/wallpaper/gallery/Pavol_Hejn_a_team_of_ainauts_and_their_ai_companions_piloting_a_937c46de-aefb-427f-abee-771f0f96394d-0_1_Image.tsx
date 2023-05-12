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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_937c46de-aefb-427f-abee-771f0f96394d-0_1.colors.json';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_937c46de-aefb-427f-abee-771f0f96394d-0_1.json';
import texts from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_937c46de-aefb-427f-abee-771f0f96394d-0_1.texts.json';

/**
 * Image of A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsPilotingA937c46deAefb427fAbee771f0f96394d0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them."
            src="https://cdn.midjourney.com/937c46de-aefb-427f-abee-771f0f96394d/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsPilotingA937c46deAefb427fAbee771f0f96394d0_1_Image.src = new URL(
    'https://cdn.midjourney.com/937c46de-aefb-427f-abee-771f0f96394d/0_1.png',
);
ATeamOfAinautsAndTheirAiCompanionsPilotingA937c46deAefb427fAbee771f0f96394d0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsPilotingA937c46deAefb427fAbee771f0f96394d0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsPilotingA937c46deAefb427fAbee771f0f96394d0_1_Image.texts =
    texts satisfies IWallpaperTexts;
