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
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_graph_of_data_visualization_in_a__650472f6-6660-4a4e-80a1-66b7436f729d-0_0.json';
import source from './Pavol_Hejn_a_wallpaper_with_a_graph_of_data_visualization_in_a__650472f6-6660-4a4e-80a1-66b7436f729d-0_0.png';

/**
 * Image of A wallpaper with a graph of data visualization, in a minimalist and modern design.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a graph of data visualization, in a minimalist and modern design."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithAGraphOfDataVisualizationInA650472f666604a4e80a166b7436f729d0_0_Image.colorStats = {
    averageColor: Color.fromHex('#878482'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#664433'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#eeddcc'),
    mostSaturatedColor: Color.fromHex('#111100'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#837c76'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#664433'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#777755'), Color.fromHex('#ffeeff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#eeddcc'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
