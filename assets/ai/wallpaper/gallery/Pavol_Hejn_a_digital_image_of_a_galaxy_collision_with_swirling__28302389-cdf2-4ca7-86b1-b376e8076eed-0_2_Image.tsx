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
import colorStats from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__28302389-cdf2-4ca7-86b1-b376e8076eed-0_2.colors.json';
import content from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__28302389-cdf2-4ca7-86b1-b376e8076eed-0_2.content.md';
import metadata from './Pavol_Hejn_a_digital_image_of_a_galaxy_collision_with_swirling__28302389-cdf2-4ca7-86b1-b376e8076eed-0_2.json';

/**
 * Image of A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalImageOfAGalaxyCollisionWithSwirling8302389Cdf24ca786b1B376e8076eed02_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital image of a galaxy collision, with swirling colors and distorted shapes representing the chaos of the event."
            src="https://cdn.midjourney.com/28302389-cdf2-4ca7-86b1-b376e8076eed/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ADigitalImageOfAGalaxyCollisionWithSwirling8302389Cdf24ca786b1B376e8076eed02_2_Image.src = new URL(
    'https://cdn.midjourney.com/28302389-cdf2-4ca7-86b1-b376e8076eed/0_2.png',
);
ADigitalImageOfAGalaxyCollisionWithSwirling8302389Cdf24ca786b1B376e8076eed02_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalImageOfAGalaxyCollisionWithSwirling8302389Cdf24ca786b1B376e8076eed02_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalImageOfAGalaxyCollisionWithSwirling8302389Cdf24ca786b1B376e8076eed02_2_Image.content = content;
