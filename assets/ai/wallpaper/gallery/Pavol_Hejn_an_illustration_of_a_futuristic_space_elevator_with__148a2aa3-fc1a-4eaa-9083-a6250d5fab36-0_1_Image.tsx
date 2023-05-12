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
import colorStats from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_1.colors.json';
import metadata from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_1.json';
import texts from './Pavol_Hejn_an_illustration_of_a_futuristic_space_elevator_with__148a2aa3-fc1a-4eaa-9083-a6250d5fab36-0_1.texts.json';

/**
 * Image of An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfAFuturisticSpaceElevatorWith48a2aa3Fc1a4eaa9083A6250d5fab3601_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a futuristic space elevator, with a cable stretching from Earth into orbit."
            src="https://cdn.midjourney.com/148a2aa3-fc1a-4eaa-9083-a6250d5fab36/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfAFuturisticSpaceElevatorWith48a2aa3Fc1a4eaa9083A6250d5fab3601_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfAFuturisticSpaceElevatorWith48a2aa3Fc1a4eaa9083A6250d5fab3601_1_Image.colorStats =
    hydrateColorStats(colorStats);
AnIllustrationOfAFuturisticSpaceElevatorWith48a2aa3Fc1a4eaa9083A6250d5fab3601_1_Image.texts =
    texts satisfies IWallpaperTexts;
