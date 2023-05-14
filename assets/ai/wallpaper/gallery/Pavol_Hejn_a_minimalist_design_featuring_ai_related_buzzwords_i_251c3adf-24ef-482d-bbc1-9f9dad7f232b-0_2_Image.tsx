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
import colorStats from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_251c3adf-24ef-482d-bbc1-9f9dad7f232b-0_2.colors.json';
import content from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_251c3adf-24ef-482d-bbc1-9f9dad7f232b-0_2.content.md';
import metadata from './Pavol_Hejn_a_minimalist_design_featuring_ai_related_buzzwords_i_251c3adf-24ef-482d-bbc1-9f9dad7f232b-0_2.json';

/**
 * Image of A minimalist design featuring AI-related buzzwords in different fonts and colors
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistDesignFeaturingAiRelatedBuzzwordsI51c3adf24ef482dBbc19f9dad7f232b02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist design featuring AI-related buzzwords in different fonts and colors"
            src="https://cdn.midjourney.com/251c3adf-24ef-482d-bbc1-9f9dad7f232b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AMinimalistDesignFeaturingAiRelatedBuzzwordsI51c3adf24ef482dBbc19f9dad7f232b02_2_Image.src = new URL(
    'https://cdn.midjourney.com/251c3adf-24ef-482d-bbc1-9f9dad7f232b/0_2.png',
);
AMinimalistDesignFeaturingAiRelatedBuzzwordsI51c3adf24ef482dBbc19f9dad7f232b02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistDesignFeaturingAiRelatedBuzzwordsI51c3adf24ef482dBbc19f9dad7f232b02_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistDesignFeaturingAiRelatedBuzzwordsI51c3adf24ef482dBbc19f9dad7f232b02_2_Image.content = content;
