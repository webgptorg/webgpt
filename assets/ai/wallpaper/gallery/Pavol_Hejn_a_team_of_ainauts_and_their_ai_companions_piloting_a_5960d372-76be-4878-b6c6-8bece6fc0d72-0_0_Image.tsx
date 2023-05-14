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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_0.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_0.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_piloting_a_5960d372-76be-4878-b6c6-8bece6fc0d72-0_0.json';

/**
 * Image of A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions piloting a massive spacecraft through the heart of a galaxy, with stars and nebulae all around them."
            src="https://cdn.midjourney.com/5960d372-76be-4878-b6c6-8bece6fc0d72/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_0_Image.src = new URL(
    'https://cdn.midjourney.com/5960d372-76be-4878-b6c6-8bece6fc0d72/0_0.png',
);
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_0_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsPilotingA5960d37276be4878B6c68bece6fc0d720_0_Image.content = content;
