/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/f047f1c7-b6f3-4eae-88f8-2fb6ec5c1607/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_surreal_interpretation_of_a_desert_landscape_f047f1c7-b6f3-4eae-88f8-2fb6ec5c1607-0_2.colors.json';
import metadata from './Pavol_Hejn_a_surreal_interpretation_of_a_desert_landscape_f047f1c7-b6f3-4eae-88f8-2fb6ec5c1607-0_2.json';
import texts from './Pavol_Hejn_a_surreal_interpretation_of_a_desert_landscape_f047f1c7-b6f3-4eae-88f8-2fb6ec5c1607-0_2.texts.json';

/**
 * Image of A surreal interpretation of a desert landscape
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASurrealInterpretationOfADesertLandscapeF047f1c7B6f34eae88f82fb6ec5c16070_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal interpretation of a desert landscape"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealInterpretationOfADesertLandscapeF047f1c7B6f34eae88f82fb6ec5c16070_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealInterpretationOfADesertLandscapeF047f1c7B6f34eae88f82fb6ec5c16070_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealInterpretationOfADesertLandscapeF047f1c7B6f34eae88f82fb6ec5c16070_2_Image.texts =
    texts satisfies IWallpaperTexts;
