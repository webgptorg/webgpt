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
import colorStats from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_db049a6b-9dd9-4215-b040-30ef0f3740af-0_2.colors.json';
import metadata from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_db049a6b-9dd9-4215-b040-30ef0f3740af-0_2.json';
import texts from './Pavol_Hejn_an_image_of_a_rocket_taking_off_from_earth_with_a_fi_db049a6b-9dd9-4215-b040-30ef0f3740af-0_2.texts.json';

/**
 * Image of An image of a rocket taking off from Earth, with a fiery trail leading into the clouds.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An image of a rocket taking off from Earth, with a fiery trail leading into the clouds."
            src="https://cdn.midjourney.com/db049a6b-9dd9-4215-b040-30ef0f3740af/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_2_Image.src = new URL(
    'https://cdn.midjourney.com/db049a6b-9dd9-4215-b040-30ef0f3740af/0_2.png',
);
AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnImageOfARocketTakingOffFromEarthWithAFiDb049a6b9dd94215B04030ef0f3740af0_2_Image.texts =
    texts satisfies IWallpaperTexts;
