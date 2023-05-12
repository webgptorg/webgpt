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
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_23e02752-df8b-457b-aeda-aba41416b19e-0_1.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_23e02752-df8b-457b-aeda-aba41416b19e-0_1.json';
import texts from './Pavol_Hejn_an_illustration_of_a_futuristic_astronaut_in_a_sleek_23e02752-df8b-457b-aeda-aba41416b19e-0_1.texts.json';

/**
 * Image of An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic astronaut in a sleek spacesuit, standing on the surface of a distant planet."
            src="https://cdn.midjourney.com/23e02752-df8b-457b-aeda-aba41416b19e/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_1_Image.src = new URL(
    'https://cdn.midjourney.com/23e02752-df8b-457b-aeda-aba41416b19e/0_1.png',
);
AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticAstronautInASleek23e02752Df8b457bAedaAba41416b19e0_1_Image.texts =
    texts satisfies IWallpaperTexts;
