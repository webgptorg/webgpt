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
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_cityscape_with__8e3174ec-9d68-44a6-b5a0-11c81e35e2ce-0_2.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_cityscape_with__8e3174ec-9d68-44a6-b5a0-11c81e35e2ce-0_2.json';
import texts from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_cityscape_with__8e3174ec-9d68-44a6-b5a0-11c81e35e2ce-0_2.texts.json';

/**
 * Image of A minimalist graphic of a futuristic cityscape, with glowing neon lights and a dark and moody color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAFuturisticCityscapeWith8e3174ec9d6844a6B5a011c81e35e2ce0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a futuristic cityscape, with glowing neon lights and a dark and moody color scheme."
            src="https://cdn.midjourney.com/8e3174ec-9d68-44a6-b5a0-11c81e35e2ce/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfAFuturisticCityscapeWith8e3174ec9d6844a6B5a011c81e35e2ce0_2_Image.src = new URL(
    'https://cdn.midjourney.com/8e3174ec-9d68-44a6-b5a0-11c81e35e2ce/0_2.png',
);
AMinimalistGraphicOfAFuturisticCityscapeWith8e3174ec9d6844a6B5a011c81e35e2ce0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAFuturisticCityscapeWith8e3174ec9d6844a6B5a011c81e35e2ce0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfAFuturisticCityscapeWith8e3174ec9d6844a6B5a011c81e35e2ce0_2_Image.texts =
    texts satisfies IWallpaperTexts;
