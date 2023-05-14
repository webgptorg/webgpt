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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__9ceb7010-937f-40e5-8937-9711b409e333-0_3.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__9ceb7010-937f-40e5-8937-9711b409e333-0_3.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__9ceb7010-937f-40e5-8937-9711b409e333-0_3.json';

/**
 * Image of A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfADigital9ceb7010937f40e589379711b409e3330_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns."
            src="https://cdn.midjourney.com/9ceb7010-937f-40e5-8937-9711b409e333/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingASimpleGraphicOfADigital9ceb7010937f40e589379711b409e3330_3_Image.src = new URL(
    'https://cdn.midjourney.com/9ceb7010-937f-40e5-8937-9711b409e333/0_3.png',
);
AWallpaperFeaturingASimpleGraphicOfADigital9ceb7010937f40e589379711b409e3330_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfADigital9ceb7010937f40e589379711b409e3330_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingASimpleGraphicOfADigital9ceb7010937f40e589379711b409e3330_3_Image.content = content;
