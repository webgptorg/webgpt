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
import colorStats from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad-0_2.colors.json';
import metadata from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad-0_2.json';
import texts from './Pavol_Hejn_a_vibrant_galaxy_with_swirling_colors_and_stars_for__6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad-0_2.texts.json';

/**
 * Image of A vibrant galaxy with swirling colors and stars for a science or astronomy blog
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A vibrant galaxy with swirling colors and stars for a science or astronomy blog"
            src="https://cdn.midjourney.com/6ccfbcf9-5e1a-43b3-8290-6f0940fef2ad/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AVibrantGalaxyWithSwirlingColorsAndStarsFor6ccfbcf95e1a43b382906f0940fef2ad0_2_Image.texts =
    texts satisfies IWallpaperTexts;
