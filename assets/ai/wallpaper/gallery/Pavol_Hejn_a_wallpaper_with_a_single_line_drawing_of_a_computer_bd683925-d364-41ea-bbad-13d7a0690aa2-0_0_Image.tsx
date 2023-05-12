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
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_computer_bd683925-d364-41ea-bbad-13d7a0690aa2-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_computer_bd683925-d364-41ea-bbad-13d7a0690aa2-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_single_line_drawing_of_a_computer_bd683925-d364-41ea-bbad-13d7a0690aa2-0_0.texts.json';

/**
 * Image of A wallpaper with a single line drawing of a computer chip, in a muted color palette such as grey or blue.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithASingleLineDrawingOfAComputerBd683925D36441eaBbad13d7a0690aa20_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a single line drawing of a computer chip, in a muted color palette such as grey or blue."
            src="https://cdn.midjourney.com/bd683925-d364-41ea-bbad-13d7a0690aa2/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithASingleLineDrawingOfAComputerBd683925D36441eaBbad13d7a0690aa20_0_Image.src = new URL(
    'https://cdn.midjourney.com/bd683925-d364-41ea-bbad-13d7a0690aa2/0_0.png',
);
AWallpaperWithASingleLineDrawingOfAComputerBd683925D36441eaBbad13d7a0690aa20_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithASingleLineDrawingOfAComputerBd683925D36441eaBbad13d7a0690aa20_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithASingleLineDrawingOfAComputerBd683925D36441eaBbad13d7a0690aa20_0_Image.texts =
    texts satisfies IWallpaperTexts;
