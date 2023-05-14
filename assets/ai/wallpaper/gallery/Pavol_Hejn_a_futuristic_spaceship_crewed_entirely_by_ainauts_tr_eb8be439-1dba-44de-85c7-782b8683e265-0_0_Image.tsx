/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */
import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { colorToDataUrl } from '../../../../src/utils/color/utils/colorToDataUrl';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_futuristic_spaceship_crewed_entirely_by_ainauts_tr_eb8be439-1dba-44de-85c7-782b8683e265-0_0.colors.json';
import content from './Pavol_Hejn_a_futuristic_spaceship_crewed_entirely_by_ainauts_tr_eb8be439-1dba-44de-85c7-782b8683e265-0_0.content.md';
import metadata from './Pavol_Hejn_a_futuristic_spaceship_crewed_entirely_by_ainauts_tr_eb8be439-1dba-44de-85c7-782b8683e265-0_0.json';

/**
 * Image of A futuristic spaceship crewed entirely by AInauts, traveling through the vast expanse of space on a mission of discovery.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AFuturisticSpaceshipCrewedEntirelyByAinautsTrEb8be4391dba44de85c7782b8683e2650_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic spaceship crewed entirely by AInauts, traveling through the vast expanse of space on a mission of discovery."
            src="https://cdn.midjourney.com/eb8be439-1dba-44de-85c7-782b8683e265/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticSpaceshipCrewedEntirelyByAinautsTrEb8be4391dba44de85c7782b8683e2650_0_Image.src = new URL(
    'https://cdn.midjourney.com/eb8be439-1dba-44de-85c7-782b8683e265/0_0.png',
);
AFuturisticSpaceshipCrewedEntirelyByAinautsTrEb8be4391dba44de85c7782b8683e2650_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticSpaceshipCrewedEntirelyByAinautsTrEb8be4391dba44de85c7782b8683e2650_0_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticSpaceshipCrewedEntirelyByAinautsTrEb8be4391dba44de85c7782b8683e2650_0_Image.content = content;
