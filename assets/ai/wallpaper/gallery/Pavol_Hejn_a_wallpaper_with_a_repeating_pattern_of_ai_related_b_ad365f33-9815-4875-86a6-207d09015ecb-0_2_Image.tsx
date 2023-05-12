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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_ai_related_b_ad365f33-9815-4875-86a6-207d09015ecb-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_ai_related_b_ad365f33-9815-4875-86a6-207d09015ecb-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_ai_related_b_ad365f33-9815-4875-86a6-207d09015ecb-0_2.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of AI-related buzzwords, in a minimalist font and color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAiRelatedBAd365f339815487586a6207d09015ecb0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of AI-related buzzwords, in a minimalist font and color scheme."
            src="https://cdn.midjourney.com/ad365f33-9815-4875-86a6-207d09015ecb/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAiRelatedBAd365f339815487586a6207d09015ecb0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAiRelatedBAd365f339815487586a6207d09015ecb0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAiRelatedBAd365f339815487586a6207d09015ecb0_2_Image.texts =
    texts satisfies IWallpaperTexts;
