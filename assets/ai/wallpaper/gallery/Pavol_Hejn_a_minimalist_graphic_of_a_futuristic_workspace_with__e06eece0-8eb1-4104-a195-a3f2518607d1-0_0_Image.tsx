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
import colorStats from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_0.colors.json';
import metadata from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_0.json';
import texts from './Pavol_Hejn_a_minimalist_graphic_of_a_futuristic_workspace_with__e06eece0-8eb1-4104-a195-a3f2518607d1-0_0.texts.json';

/**
 * Image of A minimalist graphic of a futuristic workspace, with sleek lines and a modern color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist graphic of a futuristic workspace, with sleek lines and a modern color scheme."
            src="https://cdn.midjourney.com/e06eece0-8eb1-4104-a195-a3f2518607d1/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_0_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistGraphicOfAFuturisticWorkspaceWithE06eece08eb14104A195A3f2518607d10_0_Image.texts =
    texts satisfies IWallpaperTexts;
