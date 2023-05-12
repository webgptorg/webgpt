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
import colorStats from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_3cbf7873-2208-4a52-902c-807ec6d2c22f-0_3.colors.json';
import metadata from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_3cbf7873-2208-4a52-902c-807ec6d2c22f-0_3.json';
import texts from './Pavol_Hejn_a_serene_mountain_landscape_with_a_clear_blue_lake_f_3cbf7873-2208-4a52-902c-807ec6d2c22f-0_3.texts.json';

/**
 * Image of A serene mountain landscape with a clear blue lake for a meditation or wellness website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ASereneMountainLandscapeWithAClearBlueLakeFcbf787322084a52902c807ec6d2c22f03_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene mountain landscape with a clear blue lake for a meditation or wellness website"
            src="https://cdn.midjourney.com/3cbf7873-2208-4a52-902c-807ec6d2c22f/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASereneMountainLandscapeWithAClearBlueLakeFcbf787322084a52902c807ec6d2c22f03_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneMountainLandscapeWithAClearBlueLakeFcbf787322084a52902c807ec6d2c22f03_3_Image.colorStats =
    hydrateColorStats(colorStats);
ASereneMountainLandscapeWithAClearBlueLakeFcbf787322084a52902c807ec6d2c22f03_3_Image.texts =
    texts satisfies IWallpaperTexts;
