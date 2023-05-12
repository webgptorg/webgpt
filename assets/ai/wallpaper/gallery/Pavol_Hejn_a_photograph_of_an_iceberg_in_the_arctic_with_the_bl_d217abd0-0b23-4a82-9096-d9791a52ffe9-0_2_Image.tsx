/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/d217abd0-0b23-4a82-9096-d9791a52ffe9/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_2.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_2.json';
import texts from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_d217abd0-0b23-4a82-9096-d9791a52ffe9-0_2.texts.json';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_2_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAnIcebergInTheArcticWithTheBlD217abd00b234a829096D9791a52ffe90_2_Image.texts =
    texts satisfies IWallpaperTexts;
