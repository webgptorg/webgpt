/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/f706fe96-caaf-47ea-836a-ad7a06664232/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_whimsical_image_of_a_unicorn_in_a_field_of_flowers_f706fe96-caaf-47ea-836a-ad7a06664232-0_3.colors.json';
import metadata from './Pavol_Hejn_a_whimsical_image_of_a_unicorn_in_a_field_of_flowers_f706fe96-caaf-47ea-836a-ad7a06664232-0_3.json';
import texts from './Pavol_Hejn_a_whimsical_image_of_a_unicorn_in_a_field_of_flowers_f706fe96-caaf-47ea-836a-ad7a06664232-0_3.texts.json';

/**
 * Image of A whimsical image of a unicorn in a field of flowers for a fantasy or fiction website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalImageOfAUnicornInAFieldOfFlowersF706fe96Caaf47ea836aAd7a066642320_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical image of a unicorn in a field of flowers for a fantasy or fiction website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWhimsicalImageOfAUnicornInAFieldOfFlowersF706fe96Caaf47ea836aAd7a066642320_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalImageOfAUnicornInAFieldOfFlowersF706fe96Caaf47ea836aAd7a066642320_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalImageOfAUnicornInAFieldOfFlowersF706fe96Caaf47ea836aAd7a066642320_3_Image.texts =
    texts satisfies IWallpaperTexts;
