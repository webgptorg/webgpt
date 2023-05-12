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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__116c0076-73b1-4f7d-8863-6d920308ed43-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__116c0076-73b1-4f7d-8863-6d920308ed43-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__116c0076-73b1-4f7d-8863-6d920308ed43-0_3.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA116c007673b14f7d88636d920308ed430_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers."
            src="https://cdn.midjourney.com/116c0076-73b1-4f7d-8863-6d920308ed43/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA116c007673b14f7d88636d920308ed430_3_Image.src = new URL(
    'https://cdn.midjourney.com/116c0076-73b1-4f7d-8863-6d920308ed43/0_3.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfA116c007673b14f7d88636d920308ed430_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA116c007673b14f7d88636d920308ed430_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA116c007673b14f7d88636d920308ed430_3_Image.texts =
    texts satisfies IWallpaperTexts;
