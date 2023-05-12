/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/eb03508b-fde5-40fd-b4b4-8b65a2d23019/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_eb03508b-fde5-40fd-b4b4-8b65a2d23019-0_3.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_eb03508b-fde5-40fd-b4b4-8b65a2d23019-0_3.json';
import texts from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_eb03508b-fde5-40fd-b4b4-8b65a2d23019-0_3.texts.json';

/**
 * Image of A close-up of a seagull in flight
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASeagullInFlightEb03508bFde540fdB4b48b65a2d230190_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a seagull in flight"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfASeagullInFlightEb03508bFde540fdB4b48b65a2d230190_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfASeagullInFlightEb03508bFde540fdB4b48b65a2d230190_3_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfASeagullInFlightEb03508bFde540fdB4b48b65a2d230190_3_Image.texts = texts satisfies IWallpaperTexts;
