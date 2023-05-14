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
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_0.colors.json';
import content from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_0.content.md';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_0.json';

/**
 * Image of A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfARocketLaunchWithFiery24b902b509d4ea1954e4ecbed7099d800_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky."
            src="https://cdn.midjourney.com/024b902b-509d-4ea1-954e-4ecbed7099d8/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ARealisticPhotographOfARocketLaunchWithFiery24b902b509d4ea1954e4ecbed7099d800_0_Image.src = new URL(
    'https://cdn.midjourney.com/024b902b-509d-4ea1-954e-4ecbed7099d8/0_0.png',
);
ARealisticPhotographOfARocketLaunchWithFiery24b902b509d4ea1954e4ecbed7099d800_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfARocketLaunchWithFiery24b902b509d4ea1954e4ecbed7099d800_0_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfARocketLaunchWithFiery24b902b509d4ea1954e4ecbed7099d800_0_Image.content = content;
