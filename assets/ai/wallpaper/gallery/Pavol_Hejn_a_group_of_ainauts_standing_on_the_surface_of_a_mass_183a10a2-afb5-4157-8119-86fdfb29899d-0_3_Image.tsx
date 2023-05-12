/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/183a10a2-afb5-4157-8119-86fdfb29899d/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_mass_183a10a2-afb5-4157-8119-86fdfb29899d-0_3.colors.json';
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_mass_183a10a2-afb5-4157-8119-86fdfb29899d-0_3.json';
import texts from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_mass_183a10a2-afb5-4157-8119-86fdfb29899d-0_3.texts.json';

/**
 * Image of A group of AInauts standing on the surface of a massive, rocky planet, with towering mountains and deep canyons all around them.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfAMass183a10a2Afb54157811986fdfb29899d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a massive, rocky planet, with towering mountains and deep canyons all around them."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsStandingOnTheSurfaceOfAMass183a10a2Afb54157811986fdfb29899d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfAMass183a10a2Afb54157811986fdfb29899d0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsStandingOnTheSurfaceOfAMass183a10a2Afb54157811986fdfb29899d0_3_Image.texts =
    texts satisfies IWallpaperTexts;
