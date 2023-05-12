/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/0ae9baae-a72c-468b-a035-21df967fd500/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_dramatic_image_of_a_volcano_erupting_for_a_science_0ae9baae-a72c-468b-a035-21df967fd500-0_2.colors.json';
import metadata from './Pavol_Hejn_a_dramatic_image_of_a_volcano_erupting_for_a_science_0ae9baae-a72c-468b-a035-21df967fd500-0_2.json';
import texts from './Pavol_Hejn_a_dramatic_image_of_a_volcano_erupting_for_a_science_0ae9baae-a72c-468b-a035-21df967fd500-0_2.texts.json';

/**
 * Image of A dramatic image of a volcano erupting for a science or geology blog
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dramatic image of a volcano erupting for a science or geology blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image.colorStats =
    hydrateColorStats(colorStats);
ADramaticImageOfAVolcanoEruptingForAScience0ae9baaeA72c468bA03521df967fd5000_2_Image.texts =
    texts satisfies IWallpaperTexts;
