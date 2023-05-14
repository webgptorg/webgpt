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
import { IWallpaperComponentProps, IWallpaperMetadata } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__d59a56c1-4ff1-483b-ae1d-3f239fb695f1-0_3.colors.json';
import content from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__d59a56c1-4ff1-483b-ae1d-3f239fb695f1-0_3.content.md';
import metadata from './Pavol_Hejn_a_vintage_style_graphic_of_a_retro_car_for_a_car_or__d59a56c1-4ff1-483b-ae1d-3f239fb695f1-0_3.json';

/**
 * Image of A vintage-style graphic of a retro car for a car or travel website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vintage-style graphic of a retro car for a car or travel website"
            src="https://cdn.midjourney.com/d59a56c1-4ff1-483b-ae1d-3f239fb695f1/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_3_Image.src = new URL(
    'https://cdn.midjourney.com/d59a56c1-4ff1-483b-ae1d-3f239fb695f1/0_3.png',
);
AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_3_Image.colorStats =
    hydrateColorStats(colorStats);
AVintageStyleGraphicOfARetroCarForACarOrD59a56c14ff1483bAe1d3f239fb695f10_3_Image.content = content;
