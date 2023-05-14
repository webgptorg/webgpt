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
import colorStats from './Pavol_Hejn_a_close_up_of_a_flower_15ff280a-b9fa-47d6-8b20-cbd90b3e5b12-0_0.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_flower_15ff280a-b9fa-47d6-8b20-cbd90b3e5b12-0_0.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_15ff280a-b9fa-47d6-8b20-cbd90b3e5b12-0_0.json';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlower15ff280aB9fa47d68b20Cbd90b3e5b120_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a flower"
            src="https://cdn.midjourney.com/15ff280a-b9fa-47d6-8b20-cbd90b3e5b12/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfAFlower15ff280aB9fa47d68b20Cbd90b3e5b120_0_Image.src = new URL(
    'https://cdn.midjourney.com/15ff280a-b9fa-47d6-8b20-cbd90b3e5b12/0_0.png',
);
ACloseUpOfAFlower15ff280aB9fa47d68b20Cbd90b3e5b120_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlower15ff280aB9fa47d68b20Cbd90b3e5b120_0_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfAFlower15ff280aB9fa47d68b20Cbd90b3e5b120_0_Image.content = content;
