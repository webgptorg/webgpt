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
import colorStats from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_bac4eeda-2a2a-4698-a284-fc32364846df-0_0.colors.json';
import content from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_bac4eeda-2a2a-4698-a284-fc32364846df-0_0.content.md';
import metadata from './Pavol_Hejn_a_neon_colored_interpretation_of_a_starry_sky_bac4eeda-2a2a-4698-a284-fc32364846df-0_0.json';

/**
 * Image of A neon-colored interpretation of a starry sky
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon-colored interpretation of a starry sky"
            src="https://cdn.midjourney.com/bac4eeda-2a2a-4698-a284-fc32364846df/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_0_Image.src = new URL(
    'https://cdn.midjourney.com/bac4eeda-2a2a-4698-a284-fc32364846df/0_0.png',
);
ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_0_Image.colorStats =
    hydrateColorStats(colorStats);
ANeonColoredInterpretationOfAStarrySkyBac4eeda2a2a4698A284Fc32364846df0_0_Image.content = content;
