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
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_d6838421-6a93-4041-9418-d81a92bbb9ea-0_2.colors.json';
import content from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_d6838421-6a93-4041-9418-d81a92bbb9ea-0_2.content.md';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_d6838421-6a93-4041-9418-d81a92bbb9ea-0_2.json';

/**
 * Image of A realistic photograph of a galaxy cluster, with bright colors and intricate details that showcase the vastness of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfAGalaxyClusterWithBrigD68384216a9340419418D81a92bbb9ea0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a galaxy cluster, with bright colors and intricate details that showcase the vastness of the universe."
            src="https://cdn.midjourney.com/d6838421-6a93-4041-9418-d81a92bbb9ea/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARealisticPhotographOfAGalaxyClusterWithBrigD68384216a9340419418D81a92bbb9ea0_2_Image.src = new URL(
    'https://cdn.midjourney.com/d6838421-6a93-4041-9418-d81a92bbb9ea/0_2.png',
);
ARealisticPhotographOfAGalaxyClusterWithBrigD68384216a9340419418D81a92bbb9ea0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfAGalaxyClusterWithBrigD68384216a9340419418D81a92bbb9ea0_2_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfAGalaxyClusterWithBrigD68384216a9340419418D81a92bbb9ea0_2_Image.content = content;
