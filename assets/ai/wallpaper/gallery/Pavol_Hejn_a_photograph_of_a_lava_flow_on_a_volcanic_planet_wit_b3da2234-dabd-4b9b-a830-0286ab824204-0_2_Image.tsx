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
import colorStats from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_b3da2234-dabd-4b9b-a830-0286ab824204-0_2.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_b3da2234-dabd-4b9b-a830-0286ab824204-0_2.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_b3da2234-dabd-4b9b-a830-0286ab824204-0_2.json';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement."
            src="https://cdn.midjourney.com/b3da2234-dabd-4b9b-a830-0286ab824204/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_2_Image.src = new URL(
    'https://cdn.midjourney.com/b3da2234-dabd-4b9b-a830-0286ab824204/0_2.png',
);
APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfALavaFlowOnAVolcanicPlanetWitB3da2234Dabd4b9bA8300286ab8242040_2_Image.content = content;
