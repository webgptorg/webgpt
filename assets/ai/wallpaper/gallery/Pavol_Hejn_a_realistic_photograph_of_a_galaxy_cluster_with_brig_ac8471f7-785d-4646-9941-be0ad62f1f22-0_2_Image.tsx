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
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_ac8471f7-785d-4646-9941-be0ad62f1f22-0_2.colors.json';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_ac8471f7-785d-4646-9941-be0ad62f1f22-0_2.json';
import texts from './Pavol_Hejn_a_realistic_photograph_of_a_galaxy_cluster_with_brig_ac8471f7-785d-4646-9941-be0ad62f1f22-0_2.texts.json';

/**
 * Image of A realistic photograph of a galaxy cluster, with bright colors and intricate details that showcase the vastness of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfAGalaxyClusterWithBrigAc8471f7785d46469941Be0ad62f1f220_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a galaxy cluster, with bright colors and intricate details that showcase the vastness of the universe."
            src="https://cdn.midjourney.com/ac8471f7-785d-4646-9941-be0ad62f1f22/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARealisticPhotographOfAGalaxyClusterWithBrigAc8471f7785d46469941Be0ad62f1f220_2_Image.src = new URL(
    'https://cdn.midjourney.com/ac8471f7-785d-4646-9941-be0ad62f1f22/0_2.png',
);
ARealisticPhotographOfAGalaxyClusterWithBrigAc8471f7785d46469941Be0ad62f1f220_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfAGalaxyClusterWithBrigAc8471f7785d46469941Be0ad62f1f220_2_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfAGalaxyClusterWithBrigAc8471f7785d46469941Be0ad62f1f220_2_Image.texts =
    texts satisfies IWallpaperTexts;
