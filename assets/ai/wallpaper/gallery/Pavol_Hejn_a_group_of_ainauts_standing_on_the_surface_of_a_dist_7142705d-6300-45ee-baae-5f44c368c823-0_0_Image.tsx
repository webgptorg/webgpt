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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_7142705d-6300-45ee-baae-5f44c368c823-0_0.colors.json';
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_7142705d-6300-45ee-baae-5f44c368c823-0_0.json';
import texts from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_dist_7142705d-6300-45ee-baae-5f44c368c823-0_0.texts.json';

/**
 * Image of A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfADist7142705d630045eeBaae5f44c368c8230_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a distant planet, with a massive, alien structure towering above them."
            src="https://cdn.midjourney.com/7142705d-6300-45ee-baae-5f44c368c823/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsStandingOnTheSurfaceOfADist7142705d630045eeBaae5f44c368c8230_0_Image.src = new URL(
    'https://cdn.midjourney.com/7142705d-6300-45ee-baae-5f44c368c823/0_0.png',
);
AGroupOfAinautsStandingOnTheSurfaceOfADist7142705d630045eeBaae5f44c368c8230_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfADist7142705d630045eeBaae5f44c368c8230_0_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsStandingOnTheSurfaceOfADist7142705d630045eeBaae5f44c368c8230_0_Image.texts =
    texts satisfies IWallpaperTexts;
