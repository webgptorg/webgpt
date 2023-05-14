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
import colorStats from './Pavol_Hejn_an_abstract_illustration_of_a_data_visualization_wit_2d274717-b032-4770-ac8c-4efbc3b40352-0_2.colors.json';
import content from './Pavol_Hejn_an_abstract_illustration_of_a_data_visualization_wit_2d274717-b032-4770-ac8c-4efbc3b40352-0_2.content.md';
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_data_visualization_wit_2d274717-b032-4770-ac8c-4efbc3b40352-0_2.json';

/**
 * Image of An abstract illustration of a data visualization, with sleek and modern graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a data visualization, with sleek and modern graphics and a minimalist color scheme."
            src="https://cdn.midjourney.com/2d274717-b032-4770-ac8c-4efbc3b40352/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.src = new URL(
    'https://cdn.midjourney.com/2d274717-b032-4770-ac8c-4efbc3b40352/0_2.png',
);
AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractIllustrationOfADataVisualizationWitd274717B0324770Ac8c4efbc3b4035202_2_Image.content = content;
