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
import metadata from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_2.json';
import source from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_2.png';

/**
 * Image of A geometric design in shades of purple and pink, inspired by the shape of a quantum computer
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A geometric design in shades of purple and pink, inspired by the shape of a quantum computer"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_2_Image.colorStats = {
    averageColor: Color.fromHex('#803c74'),
    lightestColor: Color.fromHex('#ffbbee'),
    darkestColor: Color.fromHex('#441133'),
    minmaxWhite: [Color.fromHex('#ffddee'), Color.fromHex('#441133')],
    minmaxRed: [Color.fromHex('#bb3366'), Color.fromHex('#ffddee')],
    minmaxGreen: [Color.fromHex('#775566'), Color.fromHex('#ffbbee')],
    minmaxBlue: [Color.fromHex('#442277'), Color.fromHex('#ffddcc')],
    mostFrequentColor: Color.fromHex('#442255'),
    mostSaturatedColor: Color.fromHex('#881155'),
    mostGroupedColor: Color.fromHex('#442266'),
    bottom: {
        averageColor: Color.fromHex('#7d3b74'),
        lightestColor: Color.fromHex('#ffbbee'),
        darkestColor: Color.fromHex('#551133'),
        minmaxWhite: [Color.fromHex('#ffddee'), Color.fromHex('#331155')],
        minmaxRed: [Color.fromHex('#bb3366'), Color.fromHex('#ffddee')],
        minmaxGreen: [Color.fromHex('#664455'), Color.fromHex('#ffbbee')],
        minmaxBlue: [Color.fromHex('#442277'), Color.fromHex('#ffdddd')],
        mostFrequentColor: Color.fromHex('#442255'),
        mostSaturatedColor: Color.fromHex('#771144'),
        mostGroupedColor: Color.fromHex('#442266'),
    },
} satisfies IImageColorStats;
