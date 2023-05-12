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
import colorStats from './Pavol_Hejn_a_desert_landscape_with_a_cactus_in_the_foreground_31b67701-82a8-4ef8-a4ac-4723c54d3159-0_2.colors.json';
import metadata from './Pavol_Hejn_a_desert_landscape_with_a_cactus_in_the_foreground_31b67701-82a8-4ef8-a4ac-4723c54d3159-0_2.json';
import texts from './Pavol_Hejn_a_desert_landscape_with_a_cactus_in_the_foreground_31b67701-82a8-4ef8-a4ac-4723c54d3159-0_2.texts.json';

/**
 * Image of A desert landscape with a cactus in the foreground
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADesertLandscapeWithACactusInTheForeground31b6770182a84ef8A4ac4723c54d31590_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A desert landscape with a cactus in the foreground"
            src="https://cdn.midjourney.com/31b67701-82a8-4ef8-a4ac-4723c54d3159/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADesertLandscapeWithACactusInTheForeground31b6770182a84ef8A4ac4723c54d31590_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADesertLandscapeWithACactusInTheForeground31b6770182a84ef8A4ac4723c54d31590_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADesertLandscapeWithACactusInTheForeground31b6770182a84ef8A4ac4723c54d31590_2_Image.texts =
    texts satisfies IWallpaperTexts;
