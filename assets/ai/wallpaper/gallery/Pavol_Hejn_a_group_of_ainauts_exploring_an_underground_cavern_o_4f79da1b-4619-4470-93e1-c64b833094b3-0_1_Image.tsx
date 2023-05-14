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
import colorStats from './Pavol_Hejn_a_group_of_ainauts_exploring_an_underground_cavern_o_4f79da1b-4619-4470-93e1-c64b833094b3-0_1.colors.json';
import content from './Pavol_Hejn_a_group_of_ainauts_exploring_an_underground_cavern_o_4f79da1b-4619-4470-93e1-c64b833094b3-0_1.content.md';
import metadata from './Pavol_Hejn_a_group_of_ainauts_exploring_an_underground_cavern_o_4f79da1b-4619-4470-93e1-c64b833094b3-0_1.json';

/**
 * Image of A group of AInauts exploring an underground cavern on a distant planet, with glowing fungi and strange creatures all around them.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A group of AInauts exploring an underground cavern on a distant planet, with glowing fungi and strange creatures all around them."
            src="https://cdn.midjourney.com/4f79da1b-4619-4470-93e1-c64b833094b3/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_1_Image.src = new URL(
    'https://cdn.midjourney.com/4f79da1b-4619-4470-93e1-c64b833094b3/0_1.png',
);
AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_1_Image.colorStats =
    hydrateColorStats(colorStats);
AGroupOfAinautsExploringAnUndergroundCavernO4f79da1b4619447093e1C64b833094b30_1_Image.content = content;
