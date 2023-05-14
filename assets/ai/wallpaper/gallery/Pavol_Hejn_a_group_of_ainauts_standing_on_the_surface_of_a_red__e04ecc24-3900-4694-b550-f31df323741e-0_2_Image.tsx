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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__e04ecc24-3900-4694-b550-f31df323741e-0_2.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__e04ecc24-3900-4694-b550-f31df323741e-0_2.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_standing_on_the_surface_of_a_red__e04ecc24-3900-4694-b550-f31df323741e-0_2.json';

/**
 * Image of A group of AInauts standing on the surface of a red planet, with towering dust storms raging in the distance.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsStandingOnTheSurfaceOfARedE04ecc2439004694B550F31df323741e0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts standing on the surface of a red planet, with towering dust storms raging in the distance."
            src="https://cdn.midjourney.com/e04ecc24-3900-4694-b550-f31df323741e/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsStandingOnTheSurfaceOfARedE04ecc2439004694B550F31df323741e0_2_Image.src = new URL(
    'https://cdn.midjourney.com/e04ecc24-3900-4694-b550-f31df323741e/0_2.png',
);
AGroupOfAinautsStandingOnTheSurfaceOfARedE04ecc2439004694B550F31df323741e0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsStandingOnTheSurfaceOfARedE04ecc2439004694B550F31df323741e0_2_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsStandingOnTheSurfaceOfARedE04ecc2439004694B550F31df323741e0_2_Image.content = content;
