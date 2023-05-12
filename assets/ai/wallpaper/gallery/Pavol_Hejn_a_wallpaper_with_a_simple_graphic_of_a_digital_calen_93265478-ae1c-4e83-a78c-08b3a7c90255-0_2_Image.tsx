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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_93265478-ae1c-4e83-a78c-08b3a7c90255-0_2.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_93265478-ae1c-4e83-a78c-08b3a7c90255-0_2.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_simple_graphic_of_a_digital_calen_93265478-ae1c-4e83-a78c-08b3a7c90255-0_2.texts.json';

/**
 * Image of A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a simple graphic of a digital calendar or to-do list, with space for notes and reminders."
            src="https://cdn.midjourney.com/93265478-ae1c-4e83-a78c-08b3a7c90255/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_2_Image.src = new URL(
    'https://cdn.midjourney.com/93265478-ae1c-4e83-a78c-08b3a7c90255/0_2.png',
);
AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASimpleGraphicOfADigitalCalen93265478Ae1c4e83A78c08b3a7c902550_2_Image.texts =
    texts satisfies IWallpaperTexts;
