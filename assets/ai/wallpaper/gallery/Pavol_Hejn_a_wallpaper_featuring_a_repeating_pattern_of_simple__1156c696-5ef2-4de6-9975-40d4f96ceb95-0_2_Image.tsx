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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__1156c696-5ef2-4de6-9975-40d4f96ceb95-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__1156c696-5ef2-4de6-9975-40d4f96ceb95-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_repeating_pattern_of_simple__1156c696-5ef2-4de6-9975-40d4f96ceb95-0_2.texts.json';

/**
 * Image of A wallpaper featuring a repeating pattern of simple equations and formulas, arranged in a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingARepeatingPatternOfSimple1156c6965ef24de6997540d4f96ceb950_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a repeating pattern of simple equations and formulas, arranged in a minimalist and modern design."
            src="https://cdn.midjourney.com/1156c696-5ef2-4de6-9975-40d4f96ceb95/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingARepeatingPatternOfSimple1156c6965ef24de6997540d4f96ceb950_2_Image.src = new URL(
    'https://cdn.midjourney.com/1156c696-5ef2-4de6-9975-40d4f96ceb95/0_2.png',
);
AWallpaperFeaturingARepeatingPatternOfSimple1156c6965ef24de6997540d4f96ceb950_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingARepeatingPatternOfSimple1156c6965ef24de6997540d4f96ceb950_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingARepeatingPatternOfSimple1156c6965ef24de6997540d4f96ceb950_2_Image.texts =
    texts satisfies IWallpaperTexts;
