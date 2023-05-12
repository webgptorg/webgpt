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
import colorStats from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__e3651f20-d067-485f-94ac-7d3e11a6a55d-0_0.colors.json';
import metadata from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__e3651f20-d067-485f-94ac-7d3e11a6a55d-0_0.json';
import texts from './Pavol_Hejn_an_urban_inspired_wallpaper_with_a_grunge_aesthetic__e3651f20-d067-485f-94ac-7d3e11a6a55d-0_0.texts.json';

/**
 * Image of An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An urban-inspired wallpaper with a grunge aesthetic, featuring a neon-lit cityscape with futuristic elements such as holographic billboards."
            src="https://cdn.midjourney.com/e3651f20-d067-485f-94ac-7d3e11a6a55d/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnUrbanInspiredWallpaperWithAGrungeAestheticE3651f20D067485f94ac7d3e11a6a55d0_0_Image.texts =
    texts satisfies IWallpaperTexts;
