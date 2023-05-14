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
import colorStats from './Pavol_Hejn_a_csg_style_rendering_of_a_spaceship_in_orbit_around_64477679-411f-4d0f-abb2-82e948835eb6-0_0.colors.json';
import content from './Pavol_Hejn_a_csg_style_rendering_of_a_spaceship_in_orbit_around_64477679-411f-4d0f-abb2-82e948835eb6-0_0.content.md';
import metadata from './Pavol_Hejn_a_csg_style_rendering_of_a_spaceship_in_orbit_around_64477679-411f-4d0f-abb2-82e948835eb6-0_0.json';

/**
 * Image of A csg-style rendering of a spaceship in orbit around a planet, with sharp angles and clean lines that highlight its modern and sleek design.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A csg-style rendering of a spaceship in orbit around a planet, with sharp angles and clean lines that highlight its modern and sleek design."
            src="https://cdn.midjourney.com/64477679-411f-4d0f-abb2-82e948835eb6/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_0_Image.src = new URL(
    'https://cdn.midjourney.com/64477679-411f-4d0f-abb2-82e948835eb6/0_0.png',
);
ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_0_Image.colorStats =
    hydrateColorStats(colorStats);
ACsgStyleRenderingOfASpaceshipInOrbitAround64477679411f4d0fAbb282e948835eb60_0_Image.content = content;
