/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/9a35d444-6be7-44ef-9a70-8215191e317a/0_1.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_9a35d444-6be7-44ef-9a70-8215191e317a-0_1.colors.json';
import metadata from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_9a35d444-6be7-44ef-9a70-8215191e317a-0_1.json';
import texts from './Pavol_Hejn_a_stylized_depiction_of_a_spacecraft_in_orbit_around_9a35d444-6be7-44ef-9a70-8215191e317a-0_1.texts.json';

/**
 * Image of A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AStylizedDepictionOfASpacecraftInOrbitAround9a35d4446be744ef9a708215191e317a0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized depiction of a spacecraft in orbit around a distant planet or moon, with dramatic lighting and shadows."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedDepictionOfASpacecraftInOrbitAround9a35d4446be744ef9a708215191e317a0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedDepictionOfASpacecraftInOrbitAround9a35d4446be744ef9a708215191e317a0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedDepictionOfASpacecraftInOrbitAround9a35d4446be744ef9a708215191e317a0_1_Image.texts =
    texts satisfies IWallpaperTexts;
