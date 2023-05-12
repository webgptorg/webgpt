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
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_mountain_range_for_an_outd_938155fa-e6bd-4c27-8fc1-a32122d0bb6a-0_1.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_mountain_range_for_an_outd_938155fa-e6bd-4c27-8fc1-a32122d0bb6a-0_1.json';
import texts from './Pavol_Hejn_a_minimalist_graphic_of_a_mountain_range_for_an_outd_938155fa-e6bd-4c27-8fc1-a32122d0bb6a-0_1.texts.json';

/**
 * Image of A minimalist graphic of a mountain range for an outdoor or adventure sports website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAMountainRangeForAnOutd938155faE6bd4c278fc1A32122d0bb6a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a mountain range for an outdoor or adventure sports website"
            src="https://cdn.midjourney.com/938155fa-e6bd-4c27-8fc1-a32122d0bb6a/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfAMountainRangeForAnOutd938155faE6bd4c278fc1A32122d0bb6a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAMountainRangeForAnOutd938155faE6bd4c278fc1A32122d0bb6a0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfAMountainRangeForAnOutd938155faE6bd4c278fc1A32122d0bb6a0_1_Image.texts =
    texts satisfies IWallpaperTexts;
