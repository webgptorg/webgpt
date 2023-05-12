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
import colorStats from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8315cab8-6158-4c6e-8aa0-e84a8d2a698e-0_1.colors.json';
import metadata from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8315cab8-6158-4c6e-8aa0-e84a8d2a698e-0_1.json';
import texts from './Pavol_Hejn_a_photograph_of_an_iceberg_in_the_arctic_with_the_bl_8315cab8-6158-4c6e-8aa0-e84a8d2a698e-0_1.texts.json';

/**
 * Image of A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnIcebergInTheArcticWithTheBl8315cab861584c6e8aa0E84a8d2a698e0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an iceberg in the Arctic, with the blue and white colors contrasting against a dark sky."
            src="https://cdn.midjourney.com/8315cab8-6158-4c6e-8aa0-e84a8d2a698e/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAnIcebergInTheArcticWithTheBl8315cab861584c6e8aa0E84a8d2a698e0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnIcebergInTheArcticWithTheBl8315cab861584c6e8aa0E84a8d2a698e0_1_Image.colorStats =
    hydrateColorStats(colorStats);
APhotographOfAnIcebergInTheArcticWithTheBl8315cab861584c6e8aa0E84a8d2a698e0_1_Image.texts =
    texts satisfies IWallpaperTexts;
