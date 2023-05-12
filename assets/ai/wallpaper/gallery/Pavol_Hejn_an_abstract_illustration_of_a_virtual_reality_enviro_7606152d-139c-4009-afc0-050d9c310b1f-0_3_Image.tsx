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
import colorStats from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_3.json';
import texts from './Pavol_Hejn_an_abstract_illustration_of_a_virtual_reality_enviro_7606152d-139c-4009-afc0-050d9c310b1f-0_3.texts.json';

/**
 * Image of An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract illustration of a virtual reality environment, with futuristic graphics and a minimalist color scheme."
            src="https://cdn.midjourney.com/7606152d-139c-4009-afc0-050d9c310b1f/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_3_Image.src = new URL(
    'https://cdn.midjourney.com/7606152d-139c-4009-afc0-050d9c310b1f/0_3.png',
);
AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractIllustrationOfAVirtualRealityEnviro7606152d139c4009Afc0050d9c310b1f0_3_Image.texts =
    texts satisfies IWallpaperTexts;
