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
import colorStats from './Pavol_Hejn_an_abstract_image_of_overlapping_triangles_in_cool_c_9eaa84c9-8b53-4bfd-b99a-49f3c2b48e41-0_2.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_overlapping_triangles_in_cool_c_9eaa84c9-8b53-4bfd-b99a-49f3c2b48e41-0_2.json';
import texts from './Pavol_Hejn_an_abstract_image_of_overlapping_triangles_in_cool_c_9eaa84c9-8b53-4bfd-b99a-49f3c2b48e41-0_2.texts.json';

/**
 * Image of An abstract image of overlapping triangles in cool, calming colors for a wellness or self-care website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfOverlappingTrianglesInCoolC9eaa84c98b534bfdB99a49f3c2b48e410_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of overlapping triangles in cool, calming colors for a wellness or self-care website"
            src="https://cdn.midjourney.com/9eaa84c9-8b53-4bfd-b99a-49f3c2b48e41/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfOverlappingTrianglesInCoolC9eaa84c98b534bfdB99a49f3c2b48e410_2_Image.src = new URL(
    'https://cdn.midjourney.com/9eaa84c9-8b53-4bfd-b99a-49f3c2b48e41/0_2.png',
);
AnAbstractImageOfOverlappingTrianglesInCoolC9eaa84c98b534bfdB99a49f3c2b48e410_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfOverlappingTrianglesInCoolC9eaa84c98b534bfdB99a49f3c2b48e410_2_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfOverlappingTrianglesInCoolC9eaa84c98b534bfdB99a49f3c2b48e410_2_Image.texts =
    texts satisfies IWallpaperTexts;
