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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_piloting_a_spacecraft_through_an_a_09aeb44d-51d3-4bcc-8dc4-2ad8d094b0f4-0_2.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_piloting_a_spacecraft_through_an_a_09aeb44d-51d3-4bcc-8dc4-2ad8d094b0f4-0_2.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_piloting_a_spacecraft_through_an_a_09aeb44d-51d3-4bcc-8dc4-2ad8d094b0f4-0_2.json';

/**
 * Image of A team of AInauts piloting a spacecraft through an asteroid field, with explosions and debris flying all around them.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsPilotingASpacecraftThroughAnA09aeb44d51d34bcc8dc42ad8d094b0f40_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts piloting a spacecraft through an asteroid field, with explosions and debris flying all around them."
            src="https://cdn.midjourney.com/09aeb44d-51d3-4bcc-8dc4-2ad8d094b0f4/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsPilotingASpacecraftThroughAnA09aeb44d51d34bcc8dc42ad8d094b0f40_2_Image.src = new URL(
    'https://cdn.midjourney.com/09aeb44d-51d3-4bcc-8dc4-2ad8d094b0f4/0_2.png',
);
ATeamOfAinautsPilotingASpacecraftThroughAnA09aeb44d51d34bcc8dc42ad8d094b0f40_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsPilotingASpacecraftThroughAnA09aeb44d51d34bcc8dc42ad8d094b0f40_2_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsPilotingASpacecraftThroughAnA09aeb44d51d34bcc8dc42ad8d094b0f40_2_Image.content = content;
