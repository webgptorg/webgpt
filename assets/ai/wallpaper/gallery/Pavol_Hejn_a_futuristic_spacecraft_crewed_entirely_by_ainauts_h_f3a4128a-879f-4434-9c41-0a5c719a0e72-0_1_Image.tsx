/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/f3a4128a-879f-4434-9c41-0a5c719a0e72/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_f3a4128a-879f-4434-9c41-0a5c719a0e72-0_1.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_f3a4128a-879f-4434-9c41-0a5c719a0e72-0_1.json';
import texts from './Pavol_Hejn_a_futuristic_spacecraft_crewed_entirely_by_ainauts_h_f3a4128a-879f-4434-9c41-0a5c719a0e72-0_1.texts.json';

/**
 * Image of A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticSpacecraftCrewedEntirelyByAinautsHF3a4128a879f44349c410a5c719a0e720_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic spacecraft crewed entirely by AInauts, hurtling through space at incredible speeds."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticSpacecraftCrewedEntirelyByAinautsHF3a4128a879f44349c410a5c719a0e720_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticSpacecraftCrewedEntirelyByAinautsHF3a4128a879f44349c410a5c719a0e720_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticSpacecraftCrewedEntirelyByAinautsHF3a4128a879f44349c410a5c719a0e720_1_Image.texts =
    texts satisfies IWallpaperTexts;
