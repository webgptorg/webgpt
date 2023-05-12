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
import colorStats from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_e6fcc2a4-c663-4772-b9af-c99ce82f6c9d-0_2.colors.json';
import metadata from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_e6fcc2a4-c663-4772-b9af-c99ce82f6c9d-0_2.json';
import texts from './Pavol_Hejn_a_retro_poster_style_image_of_a_spaceship_in_orbit_a_e6fcc2a4-c663-4772-b9af-c99ce82f6c9d-0_2.texts.json';

/**
 * Image of A retro poster-style image of a spaceship in orbit around Earth, with bold colors and typography.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A retro poster-style image of a spaceship in orbit around Earth, with bold colors and typography."
            src="https://cdn.midjourney.com/e6fcc2a4-c663-4772-b9af-c99ce82f6c9d/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_2_Image.colorStats =
    hydrateColorStats(colorStats);
ARetroPosterStyleImageOfASpaceshipInOrbitAE6fcc2a4C6634772B9afC99ce82f6c9d0_2_Image.texts =
    texts satisfies IWallpaperTexts;
