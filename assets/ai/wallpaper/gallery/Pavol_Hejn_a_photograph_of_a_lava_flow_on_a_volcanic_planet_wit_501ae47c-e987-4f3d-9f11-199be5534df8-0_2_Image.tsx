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
import colorStats from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_2.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_2.json';
import texts from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_501ae47c-e987-4f3d-9f11-199be5534df8-0_2.texts.json';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement."
            src="https://cdn.midjourney.com/501ae47c-e987-4f3d-9f11-199be5534df8/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfALavaFlowOnAVolcanicPlanetWit501ae47cE9874f3d9f11199be5534df80_2_Image.texts =
    texts satisfies IWallpaperTexts;
