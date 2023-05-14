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
import colorStats from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_0.colors.json';
import content from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_0.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_a_desert_landscape_at_sunset_with_wa_c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc-0_0.json';

/**
 * Image of A photograph of a desert landscape at sunset, with warm colors and long shadows.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of a desert landscape at sunset, with warm colors and long shadows."
            src="https://cdn.midjourney.com/c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_0_Image.src = new URL(
    'https://cdn.midjourney.com/c4ebe2a3-ba9a-4276-bc44-42e503d0d5dc/0_0.png',
);
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_0_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfADesertLandscapeAtSunsetWithWaC4ebe2a3Ba9a4276Bc4442e503d0d5dc0_0_Image.content = content;
