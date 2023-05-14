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
import colorStats from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_125cd770-66f9-438b-b69e-3bde773b338a-0_0.colors.json';
import content from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_125cd770-66f9-438b-b69e-3bde773b338a-0_0.content.md';
import metadata from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_125cd770-66f9-438b-b69e-3bde773b338a-0_0.json';

/**
 * Image of A neon-colored interpretation of a starry sky
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon-colored interpretation of a starry sky"
            src="https://cdn.midjourney.com/125cd770-66f9-438b-b69e-3bde773b338a/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_0_Image.src = new URL(
    'https://cdn.midjourney.com/125cd770-66f9-438b-b69e-3bde773b338a/0_0.png',
);
ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_0_Image.colorStats =
    hydrateColorStats(colorStats);
ANeonColoredInterpretationOfAStarrySky125cd77066f9438bB69e3bde773b338a0_0_Image.content = content;
