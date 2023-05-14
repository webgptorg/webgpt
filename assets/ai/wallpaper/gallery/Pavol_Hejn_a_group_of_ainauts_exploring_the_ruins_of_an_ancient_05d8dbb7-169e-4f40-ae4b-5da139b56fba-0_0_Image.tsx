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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_05d8dbb7-169e-4f40-ae4b-5da139b56fba-0_0.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_05d8dbb7-169e-4f40-ae4b-5da139b56fba-0_0.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_exploring_the_ruins_of_an_ancient_05d8dbb7-169e-4f40-ae4b-5da139b56fba-0_0.json';

/**
 * Image of A group of AInauts exploring the ruins of an ancient civilization on a distant planet, with towering statues and temples all around them.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsExploringTheRuinsOfAnAncient5d8dbb7169e4f40Ae4b5da139b56fba00_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts exploring the ruins of an ancient civilization on a distant planet, with towering statues and temples all around them."
            src="https://cdn.midjourney.com/05d8dbb7-169e-4f40-ae4b-5da139b56fba/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsExploringTheRuinsOfAnAncient5d8dbb7169e4f40Ae4b5da139b56fba00_0_Image.src = new URL(
    'https://cdn.midjourney.com/05d8dbb7-169e-4f40-ae4b-5da139b56fba/0_0.png',
);
AGroupOfAinautsExploringTheRuinsOfAnAncient5d8dbb7169e4f40Ae4b5da139b56fba00_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsExploringTheRuinsOfAnAncient5d8dbb7169e4f40Ae4b5da139b56fba00_0_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsExploringTheRuinsOfAnAncient5d8dbb7169e4f40Ae4b5da139b56fba00_0_Image.content = content;
