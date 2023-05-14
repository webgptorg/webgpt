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
import colorStats from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__8d331ccf-3555-465d-b3c9-4d1597a93891-0_2.colors.json';
import content from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__8d331ccf-3555-465d-b3c9-4d1597a93891-0_2.content.md';
import metadata from './Pavol_Hejn_a_minimalist_image_of_a_city_skyline_at_night_for_a__8d331ccf-3555-465d-b3c9-4d1597a93891-0_2.json';

/**
 * Image of A minimalist image of a city skyline at night for a real estate or architecture website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMinimalistImageOfACitySkylineAtNightForA8d331ccf3555465dB3c94d1597a938910_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A minimalist image of a city skyline at night for a real estate or architecture website"
            src="https://cdn.midjourney.com/8d331ccf-3555-465d-b3c9-4d1597a93891/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AMinimalistImageOfACitySkylineAtNightForA8d331ccf3555465dB3c94d1597a938910_2_Image.src = new URL(
    'https://cdn.midjourney.com/8d331ccf-3555-465d-b3c9-4d1597a93891/0_2.png',
);
AMinimalistImageOfACitySkylineAtNightForA8d331ccf3555465dB3c94d1597a938910_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AMinimalistImageOfACitySkylineAtNightForA8d331ccf3555465dB3c94d1597a938910_2_Image.colorStats =
    hydrateColorStats(colorStats);
AMinimalistImageOfACitySkylineAtNightForA8d331ccf3555465dB3c94d1597a938910_2_Image.content = content;
