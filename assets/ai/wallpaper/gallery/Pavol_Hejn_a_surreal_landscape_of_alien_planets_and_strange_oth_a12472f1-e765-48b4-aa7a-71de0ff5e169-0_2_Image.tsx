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
import colorStats from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_a12472f1-e765-48b4-aa7a-71de0ff5e169-0_2.colors.json';
import content from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_a12472f1-e765-48b4-aa7a-71de0ff5e169-0_2.content.md';
import metadata from './Pavol_Hejn_a_surreal_landscape_of_alien_planets_and_strange_oth_a12472f1-e765-48b4-aa7a-71de0ff5e169-0_2.json';

/**
 * Image of A surreal landscape of alien planets and strange, otherworldly creatures.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealLandscapeOfAlienPlanetsAndStrangeOthA12472f1E76548b4Aa7a71de0ff5e1690_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal landscape of alien planets and strange, otherworldly creatures."
            src="https://cdn.midjourney.com/a12472f1-e765-48b4-aa7a-71de0ff5e169/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ASurrealLandscapeOfAlienPlanetsAndStrangeOthA12472f1E76548b4Aa7a71de0ff5e1690_2_Image.src = new URL(
    'https://cdn.midjourney.com/a12472f1-e765-48b4-aa7a-71de0ff5e169/0_2.png',
);
ASurrealLandscapeOfAlienPlanetsAndStrangeOthA12472f1E76548b4Aa7a71de0ff5e1690_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealLandscapeOfAlienPlanetsAndStrangeOthA12472f1E76548b4Aa7a71de0ff5e1690_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealLandscapeOfAlienPlanetsAndStrangeOthA12472f1E76548b4Aa7a71de0ff5e1690_2_Image.content = content;
