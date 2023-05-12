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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_29e75b9e-7fa5-4d89-b69c-e500153c2dbc-0_2.colors.json';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_29e75b9e-7fa5-4d89-b69c-e500153c2dbc-0_2.json';
import texts from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_29e75b9e-7fa5-4d89-b69c-e500153c2dbc-0_2.texts.json';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the edge of a black hole, with time and space warping around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConducting9e75b9e7fa54d89B69cE500153c2dbc02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions conducting experiments on the edge of a black hole, with time and space warping around them."
            src="https://cdn.midjourney.com/29e75b9e-7fa5-4d89-b69c-e500153c2dbc/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsConducting9e75b9e7fa54d89B69cE500153c2dbc02_2_Image.src = new URL(
    'https://cdn.midjourney.com/29e75b9e-7fa5-4d89-b69c-e500153c2dbc/0_2.png',
);
ATeamOfAinautsAndTheirAiCompanionsConducting9e75b9e7fa54d89B69cE500153c2dbc02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConducting9e75b9e7fa54d89B69cE500153c2dbc02_2_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsConducting9e75b9e7fa54d89B69cE500153c2dbc02_2_Image.texts =
    texts satisfies IWallpaperTexts;
