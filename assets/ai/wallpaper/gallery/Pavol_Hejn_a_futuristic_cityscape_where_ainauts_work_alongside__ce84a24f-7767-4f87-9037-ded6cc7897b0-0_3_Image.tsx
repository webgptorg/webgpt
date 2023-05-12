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
import colorStats from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_work_alongside__ce84a24f-7767-4f87-9037-ded6cc7897b0-0_3.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_work_alongside__ce84a24f-7767-4f87-9037-ded6cc7897b0-0_3.json';
import texts from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_work_alongside__ce84a24f-7767-4f87-9037-ded6cc7897b0-0_3.texts.json';

/**
 * Image of A futuristic cityscape where AInauts work alongside AI to push the boundaries of science and technology.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts work alongside AI to push the boundaries of science and technology."
            src="https://cdn.midjourney.com/ce84a24f-7767-4f87-9037-ded6cc7897b0/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityscapeWhereAinautsWorkAlongsideCe84a24f77674f879037Ded6cc7897b00_3_Image.texts =
    texts satisfies IWallpaperTexts;
