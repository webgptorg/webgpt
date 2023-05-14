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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_the__3a6065d3-2030-4b42-9f46-e6a050318a54-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_the__3a6065d3-2030-4b42-9f46-e6a050318a54-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_the__3a6065d3-2030-4b42-9f46-e6a050318a54-0_2.json';

/**
 * Image of A group of AInauts in high-tech suits exploring the surface of a desert planet, with a massive sandstorm brewing in the distance.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInHighTechSuitsExploringThe3a6065d320304b429f46E6a050318a540_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in high-tech suits exploring the surface of a desert planet, with a massive sandstorm brewing in the distance."
            src="https://cdn.midjourney.com/3a6065d3-2030-4b42-9f46-e6a050318a54/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsInHighTechSuitsExploringThe3a6065d320304b429f46E6a050318a540_2_Image.src = new URL(
    'https://cdn.midjourney.com/3a6065d3-2030-4b42-9f46-e6a050318a54/0_2.png',
);
AGroupOfAinautsInHighTechSuitsExploringThe3a6065d320304b429f46E6a050318a540_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInHighTechSuitsExploringThe3a6065d320304b429f46E6a050318a540_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsInHighTechSuitsExploringThe3a6065d320304b429f46E6a050318a540_2_Image.content = content;
