/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/4f86e3cc-fb06-4938-ab70-138eca04f773/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_4f86e3cc-fb06-4938-ab70-138eca04f773-0_0.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_4f86e3cc-fb06-4938-ab70-138eca04f773-0_0.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_ico_4f86e3cc-fb06-4938-ab70-138eca04f773-0_0.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractIco4f86e3ccFb064938Ab70138eca04f7730_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract icons and symbols commonly used in the tech industry, such as computer chips and power buttons."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractIco4f86e3ccFb064938Ab70138eca04f7730_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractIco4f86e3ccFb064938Ab70138eca04f7730_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractIco4f86e3ccFb064938Ab70138eca04f7730_0_Image.texts =
    texts satisfies IWallpaperTexts;
