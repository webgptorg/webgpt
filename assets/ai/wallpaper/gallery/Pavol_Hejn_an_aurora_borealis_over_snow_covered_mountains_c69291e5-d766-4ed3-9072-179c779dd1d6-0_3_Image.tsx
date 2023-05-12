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
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_aurora_borealis_over_snow_covered_mountains_c69291e5-d766-4ed3-9072-179c779dd1d6-0_3.colors.json';
import metadata from './Pavol_Hejn_an_aurora_borealis_over_snow_covered_mountains_c69291e5-d766-4ed3-9072-179c779dd1d6-0_3.json';
import texts from './Pavol_Hejn_an_aurora_borealis_over_snow_covered_mountains_c69291e5-d766-4ed3-9072-179c779dd1d6-0_3.texts.json';

/**
 * Image of An aurora borealis over snow-covered mountains
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAuroraBorealisOverSnowCoveredMountainsC69291e5D7664ed39072179c779dd1d60_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An aurora borealis over snow-covered mountains"
            src="https://cdn.midjourney.com/c69291e5-d766-4ed3-9072-179c779dd1d6/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAuroraBorealisOverSnowCoveredMountainsC69291e5D7664ed39072179c779dd1d60_3_Image.src = new URL(
    'https://cdn.midjourney.com/c69291e5-d766-4ed3-9072-179c779dd1d6/0_3.png',
);
AnAuroraBorealisOverSnowCoveredMountainsC69291e5D7664ed39072179c779dd1d60_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAuroraBorealisOverSnowCoveredMountainsC69291e5D7664ed39072179c779dd1d60_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAuroraBorealisOverSnowCoveredMountainsC69291e5D7664ed39072179c779dd1d60_3_Image.texts =
    texts satisfies IWallpaperTexts;
