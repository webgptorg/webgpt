/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/246eb2bd-699a-4aac-8b64-96b191071d94/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_city_skyline_at_night_246eb2bd-699a-4aac-8b64-96b191071d94-0_0.colors.json';
import metadata from './Pavol_Hejn_a_city_skyline_at_night_246eb2bd-699a-4aac-8b64-96b191071d94-0_0.json';
import texts from './Pavol_Hejn_a_city_skyline_at_night_246eb2bd-699a-4aac-8b64-96b191071d94-0_0.texts.json';

/**
 * Image of A city skyline at night
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACitySkylineAtNight246eb2bd699a4aac8b6496b191071d940_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A city skyline at night"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACitySkylineAtNight246eb2bd699a4aac8b6496b191071d940_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACitySkylineAtNight246eb2bd699a4aac8b6496b191071d940_0_Image.colorStats = hydrateColorStats(colorStats);
ACitySkylineAtNight246eb2bd699a4aac8b6496b191071d940_0_Image.texts = texts satisfies IWallpaperTexts;
