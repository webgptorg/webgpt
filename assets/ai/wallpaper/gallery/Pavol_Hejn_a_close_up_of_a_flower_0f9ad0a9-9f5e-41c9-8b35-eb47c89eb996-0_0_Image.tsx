/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_close_up_of_a_flower_0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996-0_0.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_flower_0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996-0_0.json';
import texts from './Pavol_Hejn_a_close_up_of_a_flower_0f9ad0a9-9f5e-41c9-8b35-eb47c89eb996-0_0.texts.json';

/**
 * Image of A close-up of a flower
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfAFlowerf9ad0a99f5e41c98b35Eb47c89eb99600_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a flower"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfAFlowerf9ad0a99f5e41c98b35Eb47c89eb99600_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfAFlowerf9ad0a99f5e41c98b35Eb47c89eb99600_0_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfAFlowerf9ad0a99f5e41c98b35Eb47c89eb99600_0_Image.texts = texts satisfies IWallpaperTexts;
