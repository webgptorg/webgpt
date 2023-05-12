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
import colorStats from './Pavol_Hejn_a_bright_and_cheerful_image_of_a_sunflower_field_for_b5d191af-f3dc-4394-ab75-855adf486058-0_0.colors.json';
import metadata from './Pavol_Hejn_a_bright_and_cheerful_image_of_a_sunflower_field_for_b5d191af-f3dc-4394-ab75-855adf486058-0_0.json';
import texts from './Pavol_Hejn_a_bright_and_cheerful_image_of_a_sunflower_field_for_b5d191af-f3dc-4394-ab75-855adf486058-0_0.texts.json';

/**
 * Image of A bright and cheerful image of a sunflower field for a gardening or nature website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ABrightAndCheerfulImageOfASunflowerFieldForB5d191afF3dc4394Ab75855adf4860580_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A bright and cheerful image of a sunflower field for a gardening or nature website"
            src="https://cdn.midjourney.com/b5d191af-f3dc-4394-ab75-855adf486058/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABrightAndCheerfulImageOfASunflowerFieldForB5d191afF3dc4394Ab75855adf4860580_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABrightAndCheerfulImageOfASunflowerFieldForB5d191afF3dc4394Ab75855adf4860580_0_Image.colorStats =
    hydrateColorStats(colorStats);
ABrightAndCheerfulImageOfASunflowerFieldForB5d191afF3dc4394Ab75855adf4860580_0_Image.texts =
    texts satisfies IWallpaperTexts;
