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
import colorStats from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_d73bd8aa-f693-43d1-8d35-8c77c7154777-0_0.colors.json';
import content from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_d73bd8aa-f693-43d1-8d35-8c77c7154777-0_0.content.md';
import metadata from './Pavol_Hejn_a_cozy_winter_cabin_surrounded_by_snow_covered_trees_d73bd8aa-f693-43d1-8d35-8c77c7154777-0_0.json';

/**
 * Image of A cozy winter cabin surrounded by snow-covered trees for a home decor or lifestyle blog
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A cozy winter cabin surrounded by snow-covered trees for a home decor or lifestyle blog"
            src="https://cdn.midjourney.com/d73bd8aa-f693-43d1-8d35-8c77c7154777/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_0_Image.src = new URL(
    'https://cdn.midjourney.com/d73bd8aa-f693-43d1-8d35-8c77c7154777/0_0.png',
);
ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_0_Image.colorStats =
    hydrateColorStats(colorStats);
ACozyWinterCabinSurroundedBySnowCoveredTreesD73bd8aaF69343d18d358c77c71547770_0_Image.content = content;
