/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/0b4e4fca-ade1-42cf-8a5f-b6330f20645a/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_0b4e4fca-ade1-42cf-8a5f-b6330f20645a-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_0b4e4fca-ade1-42cf-8a5f-b6330f20645a-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_0b4e4fca-ade1-42cf-8a5f-b6330f20645a-0_1.texts.json';

/**
 * Image of A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingACollageOfFuturisticTechno0b4e4fcaAde142cf8a5fB6330f20645a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingACollageOfFuturisticTechno0b4e4fcaAde142cf8a5fB6330f20645a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingACollageOfFuturisticTechno0b4e4fcaAde142cf8a5fB6330f20645a0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingACollageOfFuturisticTechno0b4e4fcaAde142cf8a5fB6330f20645a0_1_Image.texts =
    texts satisfies IWallpaperTexts;
