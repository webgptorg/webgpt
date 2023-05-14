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
import colorStats from './Pavol_Hejn_a_beautiful_sunset_over_the_ocean_a23d64f6-2b55-4149-b8f4-08afd831c2e3-0_3.colors.json';
import content from './Pavol_Hejn_a_beautiful_sunset_over_the_ocean_a23d64f6-2b55-4149-b8f4-08afd831c2e3-0_3.content.md';
import metadata from './Pavol_Hejn_a_beautiful_sunset_over_the_ocean_a23d64f6-2b55-4149-b8f4-08afd831c2e3-0_3.json';

/**
 * Image of A beautiful sunset over the ocean
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A beautiful sunset over the ocean"
            src="https://cdn.midjourney.com/a23d64f6-2b55-4149-b8f4-08afd831c2e3/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_3_Image.src = new URL(
    'https://cdn.midjourney.com/a23d64f6-2b55-4149-b8f4-08afd831c2e3/0_3.png',
);
ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_3_Image.colorStats = hydrateColorStats(colorStats);
ABeautifulSunsetOverTheOceanA23d64f62b554149B8f408afd831c2e30_3_Image.content = content;
