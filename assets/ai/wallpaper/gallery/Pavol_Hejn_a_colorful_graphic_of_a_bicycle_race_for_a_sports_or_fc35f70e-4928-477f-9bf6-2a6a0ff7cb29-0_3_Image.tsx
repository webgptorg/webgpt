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
import colorStats from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_race_for_a_sports_or_fc35f70e-4928-477f-9bf6-2a6a0ff7cb29-0_3.colors.json';
import content from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_race_for_a_sports_or_fc35f70e-4928-477f-9bf6-2a6a0ff7cb29-0_3.content.md';
import metadata from './Pavol_Hejn_a_colorful_graphic_of_a_bicycle_race_for_a_sports_or_fc35f70e-4928-477f-9bf6-2a6a0ff7cb29-0_3.json';

/**
 * Image of A colorful graphic of a bicycle race for a sports or fitness website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A colorful graphic of a bicycle race for a sports or fitness website"
            src="https://cdn.midjourney.com/fc35f70e-4928-477f-9bf6-2a6a0ff7cb29/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_3_Image.src = new URL(
    'https://cdn.midjourney.com/fc35f70e-4928-477f-9bf6-2a6a0ff7cb29/0_3.png',
);
AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_3_Image.colorStats =
    hydrateColorStats(colorStats);
AColorfulGraphicOfABicycleRaceForASportsOrFc35f70e4928477f9bf62a6a0ff7cb290_3_Image.content = content;
