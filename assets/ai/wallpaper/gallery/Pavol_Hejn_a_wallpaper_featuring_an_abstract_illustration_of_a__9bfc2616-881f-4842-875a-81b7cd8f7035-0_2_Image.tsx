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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9bfc2616-881f-4842-875a-81b7cd8f7035-0_2.colors.json';
import content from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9bfc2616-881f-4842-875a-81b7cd8f7035-0_2.content.md';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__9bfc2616-881f-4842-875a-81b7cd8f7035-0_2.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a futuristic cityscape, with glowing lights and a dark and moody color scheme, set against a gradient background."
            src="https://cdn.midjourney.com/9bfc2616-881f-4842-875a-81b7cd8f7035/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_2_Image.src = new URL(
    'https://cdn.midjourney.com/9bfc2616-881f-4842-875a-81b7cd8f7035/0_2.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_2_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfA9bfc2616881f4842875a81b7cd8f70350_2_Image.content = content;
