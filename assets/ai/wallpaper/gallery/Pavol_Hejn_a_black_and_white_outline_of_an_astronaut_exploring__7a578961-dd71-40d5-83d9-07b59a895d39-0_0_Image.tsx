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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__7a578961-dd71-40d5-83d9-07b59a895d39-0_0.colors.json';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__7a578961-dd71-40d5-83d9-07b59a895d39-0_0.json';
import texts from './Pavol_Hejn_a_black_and_white_outline_of_an_astronaut_exploring__7a578961-dd71-40d5-83d9-07b59a895d39-0_0.texts.json';

/**
 * Image of A black and white outline of an astronaut exploring a distant planet, with intricate details and shading.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfAnAstronautExploring7a578961Dd7140d583d907b59a895d390_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of an astronaut exploring a distant planet, with intricate details and shading."
            src="https://cdn.midjourney.com/7a578961-dd71-40d5-83d9-07b59a895d39/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABlackAndWhiteOutlineOfAnAstronautExploring7a578961Dd7140d583d907b59a895d390_0_Image.src = new URL(
    'https://cdn.midjourney.com/7a578961-dd71-40d5-83d9-07b59a895d39/0_0.png',
);
ABlackAndWhiteOutlineOfAnAstronautExploring7a578961Dd7140d583d907b59a895d390_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfAnAstronautExploring7a578961Dd7140d583d907b59a895d390_0_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfAnAstronautExploring7a578961Dd7140d583d907b59a895d390_0_Image.texts =
    texts satisfies IWallpaperTexts;
