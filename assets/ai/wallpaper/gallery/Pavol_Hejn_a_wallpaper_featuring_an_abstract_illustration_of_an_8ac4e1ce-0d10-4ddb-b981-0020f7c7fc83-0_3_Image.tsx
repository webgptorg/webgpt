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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83-0_3.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette."
            src="https://cdn.midjourney.com/8ac4e1ce-0d10-4ddb-b981-0020f7c7fc83/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfAn8ac4e1ce0d104ddbB9810020f7c7fc830_3_Image.texts =
    texts satisfies IWallpaperTexts;
