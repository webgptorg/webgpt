/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/024b902b-509d-4ea1-954e-4ecbed7099d8/0_2.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_2.colors.json';
import metadata from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_2.json';
import texts from './Pavol_Hejn_a_realistic_photograph_of_a_rocket_launch_with_fiery_024b902b-509d-4ea1-954e-4ecbed7099d8-0_2.texts.json';

/**
 * Image of A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ARealisticPhotographOfARocketLaunchWithFiery024b902b509d4ea1954e4ecbed7099d80_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A realistic photograph of a rocket launch, with fiery trails and smoke visible in the sky."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ARealisticPhotographOfARocketLaunchWithFiery024b902b509d4ea1954e4ecbed7099d80_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ARealisticPhotographOfARocketLaunchWithFiery024b902b509d4ea1954e4ecbed7099d80_2_Image.colorStats =
    hydrateColorStats(colorStats);
ARealisticPhotographOfARocketLaunchWithFiery024b902b509d4ea1954e4ecbed7099d80_2_Image.texts =
    texts satisfies IWallpaperTexts;
