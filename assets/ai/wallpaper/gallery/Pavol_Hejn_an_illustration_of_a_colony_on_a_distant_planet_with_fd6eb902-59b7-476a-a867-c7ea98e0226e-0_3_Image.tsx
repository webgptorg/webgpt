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
import colorStats from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_fd6eb902-59b7-476a-a867-c7ea98e0226e-0_3.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_fd6eb902-59b7-476a-a867-c7ea98e0226e-0_3.json';
import texts from './Pavol_Hejn_an_illustration_of_a_colony_on_a_distant_planet_with_fd6eb902-59b7-476a-a867-c7ea98e0226e-0_3.texts.json';

/**
 * Image of An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAColonyOnADistantPlanetWithFd6eb90259b7476aA867C7ea98e0226e0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a colony on a distant planet, with a mix of futuristic and traditional architecture."
            src="https://cdn.midjourney.com/fd6eb902-59b7-476a-a867-c7ea98e0226e/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAColonyOnADistantPlanetWithFd6eb90259b7476aA867C7ea98e0226e0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAColonyOnADistantPlanetWithFd6eb90259b7476aA867C7ea98e0226e0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAColonyOnADistantPlanetWithFd6eb90259b7476aA867C7ea98e0226e0_3_Image.texts =
    texts satisfies IWallpaperTexts;
