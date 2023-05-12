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
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__aff8beb1-c9ca-49ee-bf55-b7356a2a0e17-0_2.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__aff8beb1-c9ca-49ee-bf55-b7356a2a0e17-0_2.json';
import texts from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__aff8beb1-c9ca-49ee-bf55-b7356a2a0e17-0_2.texts.json';

/**
 * Image of An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticSpaceElevatorWithAff8beb1C9ca49eeBf55B7356a2a0e170_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit."
            src="https://cdn.midjourney.com/aff8beb1-c9ca-49ee-bf55-b7356a2a0e17/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticSpaceElevatorWithAff8beb1C9ca49eeBf55B7356a2a0e170_2_Image.src = new URL(
    'https://cdn.midjourney.com/aff8beb1-c9ca-49ee-bf55-b7356a2a0e17/0_2.png',
);
AnIllustrationOfAFuturisticSpaceElevatorWithAff8beb1C9ca49eeBf55B7356a2a0e170_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticSpaceElevatorWithAff8beb1C9ca49eeBf55B7356a2a0e170_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticSpaceElevatorWithAff8beb1C9ca49eeBf55B7356a2a0e170_2_Image.texts =
    texts satisfies IWallpaperTexts;
