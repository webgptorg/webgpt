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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__d96ea371-7cd2-4bec-a81a-ee691c2bb892-0_0.colors.json';
import content from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__d96ea371-7cd2-4bec-a81a-ee691c2bb892-0_0.content.md';
import metadata from './Pavol_Hejn_a_team_of_ainauts_and_their_ai_companions_exploring__d96ea371-7cd2-4bec-a81a-ee691c2bb892-0_0.json';

/**
 * Image of A team of AInauts and their AI companions exploring a massive, underground cave system on a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsAndTheirAiCompanionsExploringD96ea3717cd24becA81aEe691c2bb8920_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts and their AI companions exploring a massive, underground cave system on a distant planet."
            src="https://cdn.midjourney.com/d96ea371-7cd2-4bec-a81a-ee691c2bb892/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ATeamOfAinautsAndTheirAiCompanionsExploringD96ea3717cd24becA81aEe691c2bb8920_0_Image.src = new URL(
    'https://cdn.midjourney.com/d96ea371-7cd2-4bec-a81a-ee691c2bb892/0_0.png',
);
ATeamOfAinautsAndTheirAiCompanionsExploringD96ea3717cd24becA81aEe691c2bb8920_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsAndTheirAiCompanionsExploringD96ea3717cd24becA81aEe691c2bb8920_0_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsAndTheirAiCompanionsExploringD96ea3717cd24becA81aEe691c2bb8920_0_Image.content = content;
