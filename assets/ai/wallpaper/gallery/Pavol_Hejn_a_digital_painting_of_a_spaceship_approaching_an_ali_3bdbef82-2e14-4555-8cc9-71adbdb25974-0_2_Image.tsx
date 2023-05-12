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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_2.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_2.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_spaceship_approaching_an_ali_3bdbef82-2e14-4555-8cc9-71adbdb25974-0_2.texts.json';

/**
 * Image of A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a spaceship approaching an alien planet, with unusual flora and fauna visible on the surface."
            src="https://cdn.midjourney.com/3bdbef82-2e14-4555-8cc9-71adbdb25974/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.src = new URL(
    'https://cdn.midjourney.com/3bdbef82-2e14-4555-8cc9-71adbdb25974/0_2.png',
);
ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfASpaceshipApproachingAnAli3bdbef822e1445558cc971adbdb259740_2_Image.texts =
    texts satisfies IWallpaperTexts;
