/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/5960d372-76be-4878-b6c6-8bece6fc0d72/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_2.colors.json';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_2.json';
import texts from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_2.texts.json';

/**
 * Image of A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_2_Image.texts =
    texts satisfies IWallpaperTexts;
