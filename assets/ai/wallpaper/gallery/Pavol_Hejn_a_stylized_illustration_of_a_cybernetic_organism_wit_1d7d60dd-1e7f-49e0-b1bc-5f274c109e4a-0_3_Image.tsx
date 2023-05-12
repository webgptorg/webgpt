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
import colorStats from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_3.colors.json';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_3.json';
import texts from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_3.texts.json';

/**
 * Image of A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects."
            src="https://cdn.midjourney.com/1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_3_Image.texts =
    texts satisfies IWallpaperTexts;
