/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/2bd382ca-5cf3-44b8-b287-930c756a19ae/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_surreal_image_of_a_person_diving_into_a_pool_of_wa_2bd382ca-5cf3-44b8-b287-930c756a19ae-0_3.colors.json';
import metadata from './Pavol_Hejn_a_surreal_image_of_a_person_diving_into_a_pool_of_wa_2bd382ca-5cf3-44b8-b287-930c756a19ae-0_3.json';
import texts from './Pavol_Hejn_a_surreal_image_of_a_person_diving_into_a_pool_of_wa_2bd382ca-5cf3-44b8-b287-930c756a19ae-0_3.texts.json';

/**
 * Image of A surreal image of a person diving into a pool of water for a health or fitness blog
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A surreal image of a person diving into a pool of water for a health or fitness blog"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_3_Image.colorStats =
    hydrateColorStats(colorStats);
ASurrealImageOfAPersonDivingIntoAPoolOfWa2bd382ca5cf344b8B287930c756a19ae0_3_Image.texts =
    texts satisfies IWallpaperTexts;
