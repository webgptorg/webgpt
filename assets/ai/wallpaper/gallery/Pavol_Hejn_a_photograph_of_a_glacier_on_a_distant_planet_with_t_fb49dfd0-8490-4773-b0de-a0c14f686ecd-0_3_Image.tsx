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
import colorStats from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_fb49dfd0-8490-4773-b0de-a0c14f686ecd-0_3.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_fb49dfd0-8490-4773-b0de-a0c14f686ecd-0_3.json';
import texts from './Pavol_Hejn_a_photograph_of_a_glacier_on_a_distant_planet_with_t_fb49dfd0-8490-4773-b0de-a0c14f686ecd-0_3.texts.json';

/**
 * Image of A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAGlacierOnADistantPlanetWithTFb49dfd084904773B0deA0c14f686ecd0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a glacier on a distant planet, with the blue and white colors contrasting against the dark sky."
            src="https://cdn.midjourney.com/fb49dfd0-8490-4773-b0de-a0c14f686ecd/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAGlacierOnADistantPlanetWithTFb49dfd084904773B0deA0c14f686ecd0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAGlacierOnADistantPlanetWithTFb49dfd084904773B0deA0c14f686ecd0_3_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAGlacierOnADistantPlanetWithTFb49dfd084904773B0deA0c14f686ecd0_3_Image.texts =
    texts satisfies IWallpaperTexts;
