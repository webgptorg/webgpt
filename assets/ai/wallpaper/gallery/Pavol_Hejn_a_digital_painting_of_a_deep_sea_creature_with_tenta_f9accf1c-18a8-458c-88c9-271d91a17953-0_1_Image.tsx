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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_f9accf1c-18a8-458c-88c9-271d91a17953-0_1.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_f9accf1c-18a8-458c-88c9-271d91a17953-0_1.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_deep_sea_creature_with_tenta_f9accf1c-18a8-458c-88c9-271d91a17953-0_1.texts.json';

/**
 * Image of A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfADeepSeaCreatureWithTentaF9accf1c18a8458c88c9271d91a179530_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a deep sea creature, with tentacles and bioluminescent patterns evoking a sense of mystery and exploration."
            src="https://cdn.midjourney.com/f9accf1c-18a8-458c-88c9-271d91a17953/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfADeepSeaCreatureWithTentaF9accf1c18a8458c88c9271d91a179530_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfADeepSeaCreatureWithTentaF9accf1c18a8458c88c9271d91a179530_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfADeepSeaCreatureWithTentaF9accf1c18a8458c88c9271d91a179530_1_Image.texts =
    texts satisfies IWallpaperTexts;
