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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_0.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_0.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_conducting_7b773780-4236-41e8-b737-cda780c9c1a3-0_0.json';

/**
 * Image of A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions conducting experiments on the surface of a massive, gas giant planet."
            src="https://cdn.midjourney.com/7b773780-4236-41e8-b737-cda780c9c1a3/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_0_Image.src = new URL(
    'https://cdn.midjourney.com/7b773780-4236-41e8-b737-cda780c9c1a3/0_0.png',
);
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_0_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsConducting7b773780423641e8B737Cda780c9c1a30_0_Image.content = content;
