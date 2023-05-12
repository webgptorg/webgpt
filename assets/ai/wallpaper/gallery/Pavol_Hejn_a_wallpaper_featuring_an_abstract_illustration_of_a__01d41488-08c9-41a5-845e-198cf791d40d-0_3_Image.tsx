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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__01d41488-08c9-41a5-845e-198cf791d40d-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__01d41488-08c9-41a5-845e-198cf791d40d-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__01d41488-08c9-41a5-845e-198cf791d40d-0_3.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA01d4148808c941a5845e198cf791d40d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and futuristic cityscape, with glowing lights and skyscrapers."
            src="https://cdn.midjourney.com/01d41488-08c9-41a5-845e-198cf791d40d/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfA01d4148808c941a5845e198cf791d40d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA01d4148808c941a5845e198cf791d40d0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA01d4148808c941a5845e198cf791d40d0_3_Image.texts =
    texts satisfies IWallpaperTexts;
