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
import colorStats from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8e369072-5b63-4c33-af2f-1fa085a80415-0_0.colors.json';
import content from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8e369072-5b63-4c33-af2f-1fa085a80415-0_0.content.md';
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8e369072-5b63-4c33-af2f-1fa085a80415-0_0.json';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky."
            src="https://cdn.midjourney.com/8e369072-5b63-4c33-af2f-1fa085a80415/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_0_Image.src = new URL(
    'https://cdn.midjourney.com/8e369072-5b63-4c33-af2f-1fa085a80415/0_0.png',
);
APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_0_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAnIcebergInTheArcticWithTheBl8e3690725b634c33Af2f1fa085a804150_0_Image.content = content;
