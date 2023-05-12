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
import colorStats from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_514808fe-967d-496b-977c-c3e2780ca4e6-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_514808fe-967d-496b-977c-c3e2780ca4e6-0_3.json';
import texts from './Pavol_Hejn_an_abstract_illustration_of_an_ai_powered_chatbot_wi_514808fe-967d-496b-977c-c3e2780ca4e6-0_3.texts.json';

/**
 * Image of An abstract illustration of an AI-powered chatbot, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of an AI-powered chatbot, with sleek and modern graphics and a minimalist color scheme."
            src="https://cdn.midjourney.com/514808fe-967d-496b-977c-c3e2780ca4e6/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractIllustrationOfAnAiPoweredChatbotWi514808fe967d496b977cC3e2780ca4e60_3_Image.texts =
    texts satisfies IWallpaperTexts;
