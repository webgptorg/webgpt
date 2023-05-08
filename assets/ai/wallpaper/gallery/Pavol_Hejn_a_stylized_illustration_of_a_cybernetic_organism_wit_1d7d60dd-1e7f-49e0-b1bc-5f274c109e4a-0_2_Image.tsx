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
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_2.json';
import source from './Pavol_Hejn_a_stylized_illustration_of_a_cybernetic_organism_wit_1d7d60dd-1e7f-49e0-b1bc-5f274c109e4a-0_2.png';

/**
 * Image of A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A stylized illustration of a cybernetic organism, with metallic textures and digital glitch effects."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AStylizedIllustrationOfACyberneticOrganismWit1d7d60dd1e7f49e0B1bc5f274c109e4a0_2_Image.colorStats = {
    averageColor: Color.fromHex('#101613'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#773311'), Color.fromHex('#99ffff')],
    minmaxGreen: [Color.fromHex('#22aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffcc')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#001100'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#0a0d0b'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#885511'), Color.fromHex('#ffffff')],
        minmaxGreen: [Color.fromHex('#008855'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#116688'), Color.fromHex('#ffffdd')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
