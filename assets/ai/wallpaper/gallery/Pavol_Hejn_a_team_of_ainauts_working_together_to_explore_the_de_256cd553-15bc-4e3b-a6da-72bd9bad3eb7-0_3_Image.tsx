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
import colorStats from './Pavol_Hejn_a_team_of_ainauts_working_together_to_explore_the_de_256cd553-15bc-4e3b-a6da-72bd9bad3eb7-0_3.colors.json';
import metadata from './Pavol_Hejn_a_team_of_ainauts_working_together_to_explore_the_de_256cd553-15bc-4e3b-a6da-72bd9bad3eb7-0_3.json';
import texts from './Pavol_Hejn_a_team_of_ainauts_working_together_to_explore_the_de_256cd553-15bc-4e3b-a6da-72bd9bad3eb7-0_3.texts.json';

/**
 * Image of A team of AInauts working together to explore the depths of a black hole, with futuristic technology at their fingertips.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A team of AInauts working together to explore the depths of a black hole, with futuristic technology at their fingertips."
            src="https://cdn.midjourney.com/256cd553-15bc-4e3b-a6da-72bd9bad3eb7/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_3_Image.src = new URL(
    'https://cdn.midjourney.com/256cd553-15bc-4e3b-a6da-72bd9bad3eb7/0_3.png',
);
ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_3_Image.colorStats =
    hydrateColorStats(colorStats);
ATeamOfAinautsWorkingTogetherToExploreTheDe256cd55315bc4e3bA6da72bd9bad3eb70_3_Image.texts =
    texts satisfies IWallpaperTexts;
