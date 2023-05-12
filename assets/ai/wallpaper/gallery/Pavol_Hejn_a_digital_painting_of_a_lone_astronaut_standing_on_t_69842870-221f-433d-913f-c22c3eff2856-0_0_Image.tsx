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
import colorStats from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_0.colors.json';
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_0.json';
import texts from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_69842870-221f-433d-913f-c22c3eff2856-0_0.texts.json';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src="https://cdn.midjourney.com/69842870-221f-433d-913f-c22c3eff2856/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_0_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalPaintingOfALoneAstronautStandingOnT69842870221f433d913fC22c3eff28560_0_Image.texts =
    texts satisfies IWallpaperTexts;
