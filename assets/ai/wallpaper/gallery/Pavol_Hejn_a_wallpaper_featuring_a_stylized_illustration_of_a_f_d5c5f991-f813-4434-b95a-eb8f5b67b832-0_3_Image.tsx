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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_d5c5f991-f813-4434-b95a-eb8f5b67b832-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_d5c5f991-f813-4434-b95a-eb8f5b67b832-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_stylized_illustration_of_a_f_d5c5f991-f813-4434-b95a-eb8f5b67b832-0_3.texts.json';

/**
 * Image of A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAStylizedIllustrationOfAFD5c5f991F8134434B95aEb8f5b67b8320_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a stylized illustration of a futuristic workspace, with a minimalist and modern design."
            src="https://cdn.midjourney.com/d5c5f991-f813-4434-b95a-eb8f5b67b832/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAStylizedIllustrationOfAFD5c5f991F8134434B95aEb8f5b67b8320_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAStylizedIllustrationOfAFD5c5f991F8134434B95aEb8f5b67b8320_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAStylizedIllustrationOfAFD5c5f991F8134434B95aEb8f5b67b8320_3_Image.texts =
    texts satisfies IWallpaperTexts;
