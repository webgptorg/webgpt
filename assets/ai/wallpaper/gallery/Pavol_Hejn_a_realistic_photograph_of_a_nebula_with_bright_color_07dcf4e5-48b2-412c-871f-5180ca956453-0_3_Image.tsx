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
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_07dcf4e5-48b2-412c-871f-5180ca956453-0_3.colors.json';
import content from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_07dcf4e5-48b2-412c-871f-5180ca956453-0_3.content.md';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_nebula_with_bright_color_07dcf4e5-48b2-412c-871f-5180ca956453-0_3.json';

/**
 * Image of A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a nebula, with bright colors and intricate details that showcase the beauty of the universe."
            src="https://cdn.midjourney.com/07dcf4e5-48b2-412c-871f-5180ca956453/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_3_Image.src = new URL(
    'https://cdn.midjourney.com/07dcf4e5-48b2-412c-871f-5180ca956453/0_3.png',
);
ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_3_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfANebulaWithBrightColor07dcf4e548b2412c871f5180ca9564530_3_Image.content = content;
