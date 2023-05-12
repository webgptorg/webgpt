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
import colorStats from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__2d895631-d6ae-4a9e-8642-24d4c1ef2bc9-0_0.colors.json';
import metadata from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__2d895631-d6ae-4a9e-8642-24d4c1ef2bc9-0_0.json';
import texts from './Pavol_Hejn_ainauts_and_their_ai_companions_working_together_in__2d895631-d6ae-4a9e-8642-24d4c1ef2bc9-0_0.texts.json';

/**
 * Image of AInauts and their AI companions working together in a massive, zero-gravity space station.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AinautsAndTheirAiCompanionsWorkingTogetherIn2d895631D6ae4a9e864224d4c1ef2bc90_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="AInauts and their AI companions working together in a massive, zero-gravity space station."
            src="https://cdn.midjourney.com/2d895631-d6ae-4a9e-8642-24d4c1ef2bc9/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AinautsAndTheirAiCompanionsWorkingTogetherIn2d895631D6ae4a9e864224d4c1ef2bc90_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AinautsAndTheirAiCompanionsWorkingTogetherIn2d895631D6ae4a9e864224d4c1ef2bc90_0_Image.colorStats =
    hydrateColorStats(colorStats);
AinautsAndTheirAiCompanionsWorkingTogetherIn2d895631D6ae4a9e864224d4c1ef2bc90_0_Image.texts =
    texts satisfies IWallpaperTexts;
