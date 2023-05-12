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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__22fa9cc9-d345-4fad-aaf6-3c954b579f36-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__22fa9cc9-d345-4fad-aaf6-3c954b579f36-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_a_simple_graphic_of_a_digital__22fa9cc9-d345-4fad-aaf6-3c954b579f36-0_3.texts.json';

/**
 * Image of A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingASimpleGraphicOfADigital22fa9cc9D3454fadAaf63c954b579f360_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring a simple graphic of a digital clock or timer, with space for setting alarms and countdowns, set against a gradient background."
            src="https://cdn.midjourney.com/22fa9cc9-d345-4fad-aaf6-3c954b579f36/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingASimpleGraphicOfADigital22fa9cc9D3454fadAaf63c954b579f360_3_Image.src = new URL(
    'https://cdn.midjourney.com/22fa9cc9-d345-4fad-aaf6-3c954b579f36/0_3.png',
);
AWallpaperFeaturingASimpleGraphicOfADigital22fa9cc9D3454fadAaf63c954b579f360_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingASimpleGraphicOfADigital22fa9cc9D3454fadAaf63c954b579f360_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingASimpleGraphicOfADigital22fa9cc9D3454fadAaf63c954b579f360_3_Image.texts =
    texts satisfies IWallpaperTexts;
