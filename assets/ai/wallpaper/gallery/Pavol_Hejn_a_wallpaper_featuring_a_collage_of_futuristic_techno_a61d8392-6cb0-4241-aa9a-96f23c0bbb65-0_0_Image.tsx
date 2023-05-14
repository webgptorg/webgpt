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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_a61d8392-6cb0-4241-aa9a-96f23c0bbb65-0_0.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_a61d8392-6cb0-4241-aa9a-96f23c0bbb65-0_0.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_collage_of_futuristic_techno_a61d8392-6cb0-4241-aa9a-96f23c0bbb65-0_0.json';

/**
 * Image of A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingACollageOfFuturisticTechnoA61d83926cb04241Aa9a96f23c0bbb650_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a collage of futuristic technology such as drones, robots, and smart devices, set against a black background."
            src="https://cdn.midjourney.com/a61d8392-6cb0-4241-aa9a-96f23c0bbb65/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingACollageOfFuturisticTechnoA61d83926cb04241Aa9a96f23c0bbb650_0_Image.src = new URL(
    'https://cdn.midjourney.com/a61d8392-6cb0-4241-aa9a-96f23c0bbb65/0_0.png',
);
AWallpaperFeaturingACollageOfFuturisticTechnoA61d83926cb04241Aa9a96f23c0bbb650_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingACollageOfFuturisticTechnoA61d83926cb04241Aa9a96f23c0bbb650_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingACollageOfFuturisticTechnoA61d83926cb04241Aa9a96f23c0bbb650_0_Image.content = content;
