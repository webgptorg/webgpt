/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/31f096df-b652-4e89-b69b-16203b15e2a6/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_31f096df-b652-4e89-b69b-16203b15e2a6-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_31f096df-b652-4e89-b69b-16203b15e2a6-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_31f096df-b652-4e89-b69b-16203b15e2a6-0_3.texts.json';

/**
 * Image of A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingACollageOfFuturisticTechno1f096dfB6524e89B69b16203b15e2a603_3_Image(
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

AWallpaperFeaturingACollageOfFuturisticTechno1f096dfB6524e89B69b16203b15e2a603_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingACollageOfFuturisticTechno1f096dfB6524e89B69b16203b15e2a603_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingACollageOfFuturisticTechno1f096dfB6524e89B69b16203b15e2a603_3_Image.texts =
    texts satisfies IWallpaperTexts;
