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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_7057680a-672b-466d-a49e-081c711f618b-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_7057680a-672b-466d-a49e-081c711f618b-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_an_7057680a-672b-466d-a49e-081c711f618b-0_2.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAn7057680a672b466dA49e081c711f618b0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of an AI neural network, with intricate lines and a dark and technological color palette."
            src="https://cdn.midjourney.com/7057680a-672b-466d-a49e-081c711f618b/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAn7057680a672b466dA49e081c711f618b0_2_Image.src = new URL(
    'https://cdn.midjourney.com/7057680a-672b-466d-a49e-081c711f618b/0_2.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfAn7057680a672b466dA49e081c711f618b0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAn7057680a672b466dA49e081c711f618b0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfAn7057680a672b466dA49e081c711f618b0_2_Image.texts =
    texts satisfies IWallpaperTexts;
