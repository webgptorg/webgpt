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
import colorStats from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_66231969-2f32-46cd-bcc0-14ae53a16cb9-0_1.colors.json';
import content from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_66231969-2f32-46cd-bcc0-14ae53a16cb9-0_1.content.md';
import metadata from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_66231969-2f32-46cd-bcc0-14ae53a16cb9-0_1.json';

/**
 * Image of An image of a rocket taking off from Earth, with a fiery trail leading into the clouds.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An image of a rocket taking off from Earth, with a fiery trail leading into the clouds."
            src="https://cdn.midjourney.com/66231969-2f32-46cd-bcc0-14ae53a16cb9/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_1_Image.src = new URL(
    'https://cdn.midjourney.com/66231969-2f32-46cd-bcc0-14ae53a16cb9/0_1.png',
);
AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnImageOfARocketTakingOffFromEarthWithAFi662319692f3246cdBcc014ae53a16cb90_1_Image.content = content;
