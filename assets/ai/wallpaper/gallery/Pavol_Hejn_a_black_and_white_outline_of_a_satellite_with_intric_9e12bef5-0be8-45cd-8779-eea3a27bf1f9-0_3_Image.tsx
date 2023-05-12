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
import colorStats from './Pavol_Hejn_a_black_and_white_outline_of_a_satellite_with_intric_9e12bef5-0be8-45cd-8779-eea3a27bf1f9-0_3.colors.json';
import metadata from './Pavol_Hejn_a_black_and_white_outline_of_a_satellite_with_intric_9e12bef5-0be8-45cd-8779-eea3a27bf1f9-0_3.json';
import texts from './Pavol_Hejn_a_black_and_white_outline_of_a_satellite_with_intric_9e12bef5-0be8-45cd-8779-eea3a27bf1f9-0_3.texts.json';

/**
 * Image of A black and white outline of a satellite, with intricate details that showcase its technical components and purpose.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ABlackAndWhiteOutlineOfASatelliteWithIntric9e12bef50be845cd8779Eea3a27bf1f90_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A black and white outline of a satellite, with intricate details that showcase its technical components and purpose."
            src="https://cdn.midjourney.com/9e12bef5-0be8-45cd-8779-eea3a27bf1f9/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ABlackAndWhiteOutlineOfASatelliteWithIntric9e12bef50be845cd8779Eea3a27bf1f90_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ABlackAndWhiteOutlineOfASatelliteWithIntric9e12bef50be845cd8779Eea3a27bf1f90_3_Image.colorStats =
    hydrateColorStats(colorStats);
ABlackAndWhiteOutlineOfASatelliteWithIntric9e12bef50be845cd8779Eea3a27bf1f90_3_Image.texts =
    texts satisfies IWallpaperTexts;
