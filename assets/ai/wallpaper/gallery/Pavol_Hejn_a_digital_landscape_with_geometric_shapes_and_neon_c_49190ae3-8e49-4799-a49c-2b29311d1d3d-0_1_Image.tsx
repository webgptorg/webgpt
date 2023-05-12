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
import colorStats from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_1.colors.json';
import metadata from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_1.json';
import texts from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_1.texts.json';

/**
 * Image of A digital landscape with geometric shapes and neon colors
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital landscape with geometric shapes and neon colors"
            src="https://cdn.midjourney.com/49190ae3-8e49-4799-a49c-2b29311d1d3d/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_1_Image.src = new URL(
    'https://cdn.midjourney.com/49190ae3-8e49-4799-a49c-2b29311d1d3d/0_1.png',
);
ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_1_Image.texts =
    texts satisfies IWallpaperTexts;
