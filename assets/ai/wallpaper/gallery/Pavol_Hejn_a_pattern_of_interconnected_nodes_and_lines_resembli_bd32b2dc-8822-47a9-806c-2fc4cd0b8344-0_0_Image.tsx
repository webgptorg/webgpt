/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/bd32b2dc-8822-47a9-806c-2fc4cd0b8344/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_pattern_of_interconnected_nodes_and_lines_resembli_bd32b2dc-8822-47a9-806c-2fc4cd0b8344-0_0.colors.json';
import metadata from './Pavol_Hejn_a_pattern_of_interconnected_nodes_and_lines_resembli_bd32b2dc-8822-47a9-806c-2fc4cd0b8344-0_0.json';
import texts from './Pavol_Hejn_a_pattern_of_interconnected_nodes_and_lines_resembli_bd32b2dc-8822-47a9-806c-2fc4cd0b8344-0_0.texts.json';

/**
 * Image of A pattern of interconnected nodes and lines resembling a neural network
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APatternOfInterconnectedNodesAndLinesResembliBd32b2dc882247a9806c2fc4cd0b83440_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pattern of interconnected nodes and lines resembling a neural network"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APatternOfInterconnectedNodesAndLinesResembliBd32b2dc882247a9806c2fc4cd0b83440_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APatternOfInterconnectedNodesAndLinesResembliBd32b2dc882247a9806c2fc4cd0b83440_0_Image.colorStats =
    hydrateColorStats(colorStats);
APatternOfInterconnectedNodesAndLinesResembliBd32b2dc882247a9806c2fc4cd0b83440_0_Image.texts =
    texts satisfies IWallpaperTexts;
