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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_8d25bb1e-a807-4ccd-b195-19d01288b845-0_1.colors.json';
import metadata from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_8d25bb1e-a807-4ccd-b195-19d01288b845-0_1.json';
import texts from './Pavol_Hejn_a_group_of_ainauts_in_high_tech_suits_exploring_a_fr_8d25bb1e-a807-4ccd-b195-19d01288b845-0_1.texts.json';

/**
 * Image of A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsInHighTechSuitsExploringAFr8d25bb1eA8074ccdB19519d01288b8450_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts in high-tech suits exploring a frozen wasteland on a distant planet, with towering ice formations all around them."
            src="https://cdn.midjourney.com/8d25bb1e-a807-4ccd-b195-19d01288b845/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGroupOfAinautsInHighTechSuitsExploringAFr8d25bb1eA8074ccdB19519d01288b8450_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsInHighTechSuitsExploringAFr8d25bb1eA8074ccdB19519d01288b8450_1_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsInHighTechSuitsExploringAFr8d25bb1eA8074ccdB19519d01288b8450_1_Image.texts =
    texts satisfies IWallpaperTexts;
