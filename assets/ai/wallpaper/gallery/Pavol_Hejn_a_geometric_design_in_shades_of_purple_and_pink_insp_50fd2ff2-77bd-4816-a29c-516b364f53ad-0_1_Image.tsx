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
import colorStats from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_1.colors.json';
import content from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_1.content.md';
import metadata from './Pavol_Hejn_a_geometric_design_in_shades_of_purple_and_pink_insp_50fd2ff2-77bd-4816-a29c-516b364f53ad-0_1.json';

/**
 * Image of A geometric design in shades of purple and pink, inspired by the shape of a quantum computer
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A geometric design in shades of purple and pink, inspired by the shape of a quantum computer"
            src="https://cdn.midjourney.com/50fd2ff2-77bd-4816-a29c-516b364f53ad/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_1_Image.src = new URL(
    'https://cdn.midjourney.com/50fd2ff2-77bd-4816-a29c-516b364f53ad/0_1.png',
);
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_1_Image.colorStats =
    hydrateColorStats(colorStats);
AGeometricDesignInShadesOfPurpleAndPinkInsp50fd2ff277bd4816A29c516b364f53ad0_1_Image.content = content;
