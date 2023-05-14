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
import colorStats from './Pavol_Hejn_a_bright_and_playful_image_of_a_rainbow_for_a_childr_30660838-6a7d-4053-b6e3-3f79d3125d66-0_0.colors.json';
import content from './Pavol_Hejn_a_bright_and_playful_image_of_a_rainbow_for_a_childr_30660838-6a7d-4053-b6e3-3f79d3125d66-0_0.content.md';
import metadata from './Pavol_Hejn_a_bright_and_playful_image_of_a_rainbow_for_a_childr_30660838-6a7d-4053-b6e3-3f79d3125d66-0_0.json';

/**
 * Image of A bright and playful image of a rainbow for a children's or education website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ABrightAndPlayfulImageOfARainbowForAChildr306608386a7d4053B6e33f79d3125d660_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A bright and playful image of a rainbow for a children's or education website"
            src="https://cdn.midjourney.com/30660838-6a7d-4053-b6e3-3f79d3125d66/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABrightAndPlayfulImageOfARainbowForAChildr306608386a7d4053B6e33f79d3125d660_0_Image.src = new URL(
    'https://cdn.midjourney.com/30660838-6a7d-4053-b6e3-3f79d3125d66/0_0.png',
);
ABrightAndPlayfulImageOfARainbowForAChildr306608386a7d4053B6e33f79d3125d660_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABrightAndPlayfulImageOfARainbowForAChildr306608386a7d4053B6e33f79d3125d660_0_Image.colorStats =
    hydrateColorStats(colorStats);
ABrightAndPlayfulImageOfARainbowForAChildr306608386a7d4053B6e33f79d3125d660_0_Image.content = content;
