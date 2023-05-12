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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_neural_networ_ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e-0_0.texts.json';

/**
 * Image of A wallpaper with a simple graphic of a neural network, against a background of complementary colors.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a neural network, against a background of complementary colors."
            src="https://cdn.midjourney.com/ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.src = new URL(
    'https://cdn.midjourney.com/ac3aa57d-ed4f-49ad-ae2b-f979aad43b7e/0_0.png',
);
AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfANeuralNetworAc3aa57dEd4f49adAe2bF979aad43b7e0_0_Image.texts =
    texts satisfies IWallpaperTexts;
