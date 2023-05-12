/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/cec00fc9-66d6-4464-bdda-a9976c255b88/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_close_up_of_a_tree_trunk_with_moss_cec00fc9-66d6-4464-bdda-a9976c255b88-0_1.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_tree_trunk_with_moss_cec00fc9-66d6-4464-bdda-a9976c255b88-0_1.json';
import texts from './Pavol_Hejn_a_close_up_of_a_tree_trunk_with_moss_cec00fc9-66d6-4464-bdda-a9976c255b88-0_1.texts.json';

/**
 * Image of A close-up of a tree trunk with moss
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a tree trunk with moss"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_1_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfATreeTrunkWithMossCec00fc966d64464BddaA9976c255b880_1_Image.texts = texts satisfies IWallpaperTexts;
