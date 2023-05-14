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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_piloting_a_small_spacecraft_throug_bdbfc142-36bb-455b-aeac-e31744cd233b-0_3.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_piloting_a_small_spacecraft_throug_bdbfc142-36bb-455b-aeac-e31744cd233b-0_3.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_piloting_a_small_spacecraft_throug_bdbfc142-36bb-455b-aeac-e31744cd233b-0_3.json';

/**
 * Image of A team of AInauts piloting a small spacecraft through a dangerous asteroid field, with debris flying all around them.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsPilotingASmallSpacecraftThrougBdbfc14236bb455bAeacE31744cd233b0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts piloting a small spacecraft through a dangerous asteroid field, with debris flying all around them."
            src="https://cdn.midjourney.com/bdbfc142-36bb-455b-aeac-e31744cd233b/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsPilotingASmallSpacecraftThrougBdbfc14236bb455bAeacE31744cd233b0_3_Image.src = new URL(
    'https://cdn.midjourney.com/bdbfc142-36bb-455b-aeac-e31744cd233b/0_3.png',
);
ATeamOfAinautsPilotingASmallSpacecraftThrougBdbfc14236bb455bAeacE31744cd233b0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsPilotingASmallSpacecraftThrougBdbfc14236bb455bAeacE31744cd233b0_3_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsPilotingASmallSpacecraftThrougBdbfc14236bb455bAeacE31744cd233b0_3_Image.content = content;
