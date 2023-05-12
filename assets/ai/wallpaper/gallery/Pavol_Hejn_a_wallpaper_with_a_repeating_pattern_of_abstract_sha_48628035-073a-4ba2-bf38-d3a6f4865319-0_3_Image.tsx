/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/48628035-073a-4ba2-bf38-d3a6f4865319/0_3.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_48628035-073a-4ba2-bf38-d3a6f4865319-0_3.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_48628035-073a-4ba2-bf38-d3a6f4865319-0_3.json';
import texts from './Pavol_Hejn_a_wallpaper_with_a_repeating_pattern_of_abstract_sha_48628035-073a-4ba2-bf38-d3a6f4865319-0_3.texts.json';

/**
 * Image of A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWallpaperWithARepeatingPatternOfAbstractSha48628035073a4ba2Bf38D3a6f48653190_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper with a repeating pattern of abstract shapes inspired by computer viruses and malware, set against a black background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperWithARepeatingPatternOfAbstractSha48628035073a4ba2Bf38D3a6f48653190_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperWithARepeatingPatternOfAbstractSha48628035073a4ba2Bf38D3a6f48653190_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperWithARepeatingPatternOfAbstractSha48628035073a4ba2Bf38D3a6f48653190_3_Image.texts =
    texts satisfies IWallpaperTexts;
