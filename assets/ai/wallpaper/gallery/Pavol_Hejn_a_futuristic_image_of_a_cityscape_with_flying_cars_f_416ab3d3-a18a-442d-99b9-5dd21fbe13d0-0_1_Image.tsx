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
import colorStats from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_416ab3d3-a18a-442d-99b9-5dd21fbe13d0-0_1.colors.json';
import content from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_416ab3d3-a18a-442d-99b9-5dd21fbe13d0-0_1.content.md';
import metadata from './Pavol_Hejn_a_futuristic_image_of_a_cityscape_with_flying_cars_f_416ab3d3-a18a-442d-99b9-5dd21fbe13d0-0_1.json';

/**
 * Image of A futuristic image of a cityscape with flying cars for a sci-fi or technology website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticImageOfACityscapeWithFlyingCarsF416ab3d3A18a442d99b95dd21fbe13d00_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic image of a cityscape with flying cars for a sci-fi or technology website"
            src="https://cdn.midjourney.com/416ab3d3-a18a-442d-99b9-5dd21fbe13d0/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticImageOfACityscapeWithFlyingCarsF416ab3d3A18a442d99b95dd21fbe13d00_1_Image.src = new URL(
    'https://cdn.midjourney.com/416ab3d3-a18a-442d-99b9-5dd21fbe13d0/0_1.png',
);
AFuturisticImageOfACityscapeWithFlyingCarsF416ab3d3A18a442d99b95dd21fbe13d00_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticImageOfACityscapeWithFlyingCarsF416ab3d3A18a442d99b95dd21fbe13d00_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticImageOfACityscapeWithFlyingCarsF416ab3d3A18a442d99b95dd21fbe13d00_1_Image.content = content;
