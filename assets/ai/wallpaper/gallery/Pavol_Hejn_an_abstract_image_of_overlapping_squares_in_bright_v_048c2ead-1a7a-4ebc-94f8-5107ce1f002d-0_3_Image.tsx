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
import colorStats from './Pavol_Hejn_an_abstract_image_of_overlapping_squares_in_bright_v_048c2ead-1a7a-4ebc-94f8-5107ce1f002d-0_3.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_overlapping_squares_in_bright_v_048c2ead-1a7a-4ebc-94f8-5107ce1f002d-0_3.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_squares_in_bright_v_048c2ead-1a7a-4ebc-94f8-5107ce1f002d-0_3.json';

/**
 * Image of An abstract image of overlapping squares in bright, vibrant colors for a business or marketing website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingSquaresInBrightV048c2ead1a7a4ebc94f85107ce1f002d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping squares in bright, vibrant colors for a business or marketing website"
            src="https://cdn.midjourney.com/048c2ead-1a7a-4ebc-94f8-5107ce1f002d/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfOverlappingSquaresInBrightV048c2ead1a7a4ebc94f85107ce1f002d0_3_Image.src = new URL(
    'https://cdn.midjourney.com/048c2ead-1a7a-4ebc-94f8-5107ce1f002d/0_3.png',
);
AnAbstractImageOfOverlappingSquaresInBrightV048c2ead1a7a4ebc94f85107ce1f002d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingSquaresInBrightV048c2ead1a7a4ebc94f85107ce1f002d0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfOverlappingSquaresInBrightV048c2ead1a7a4ebc94f85107ce1f002d0_3_Image.content = content;
