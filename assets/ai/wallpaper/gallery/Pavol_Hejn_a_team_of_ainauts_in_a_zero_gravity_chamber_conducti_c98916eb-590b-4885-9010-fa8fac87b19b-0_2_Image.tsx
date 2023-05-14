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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_in_a_zero_gravity_chamber_conducti_c98916eb-590b-4885-9010-fa8fac87b19b-0_2.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_in_a_zero_gravity_chamber_conducti_c98916eb-590b-4885-9010-fa8fac87b19b-0_2.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_in_a_zero_gravity_chamber_conducti_c98916eb-590b-4885-9010-fa8fac87b19b-0_2.json';

/**
 * Image of A team of AInauts in a zero-gravity chamber conducting experiments on the effects of AI on the human body.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsInAZeroGravityChamberConductiC98916eb590b48859010Fa8fac87b19b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts in a zero-gravity chamber conducting experiments on the effects of AI on the human body."
            src="https://cdn.midjourney.com/c98916eb-590b-4885-9010-fa8fac87b19b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsInAZeroGravityChamberConductiC98916eb590b48859010Fa8fac87b19b0_2_Image.src = new URL(
    'https://cdn.midjourney.com/c98916eb-590b-4885-9010-fa8fac87b19b/0_2.png',
);
ATeamOfAinautsInAZeroGravityChamberConductiC98916eb590b48859010Fa8fac87b19b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsInAZeroGravityChamberConductiC98916eb590b48859010Fa8fac87b19b0_2_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsInAZeroGravityChamberConductiC98916eb590b48859010Fa8fac87b19b0_2_Image.content = content;
