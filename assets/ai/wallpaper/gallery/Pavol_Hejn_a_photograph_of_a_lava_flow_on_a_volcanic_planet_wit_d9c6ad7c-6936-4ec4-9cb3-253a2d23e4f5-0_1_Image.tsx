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
import colorStats from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5-0_1.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5-0_1.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_lava_flow_on_a_volcanic_planet_wit_d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5-0_1.json';

/**
 * Image of A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a lava flow on a volcanic planet, with the red and orange colors evoking a sense of danger and excitement."
            src="https://cdn.midjourney.com/d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.src = new URL(
    'https://cdn.midjourney.com/d9c6ad7c-6936-4ec4-9cb3-253a2d23e4f5/0_1.png',
);
APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfALavaFlowOnAVolcanicPlanetWitD9c6ad7c69364ec49cb3253a2d23e4f50_1_Image.content = content;
