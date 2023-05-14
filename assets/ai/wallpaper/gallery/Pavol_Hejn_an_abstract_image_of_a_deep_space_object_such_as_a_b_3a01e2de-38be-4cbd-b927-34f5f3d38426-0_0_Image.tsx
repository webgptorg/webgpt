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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_3a01e2de-38be-4cbd-b927-34f5f3d38426-0_0.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_3a01e2de-38be-4cbd-b927-34f5f3d38426-0_0.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_3a01e2de-38be-4cbd-b927-34f5f3d38426-0_0.json';

/**
 * Image of An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfADeepSpaceObjectSuchAsAB3a01e2de38be4cbdB92734f5f3d384260_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns."
            src="https://cdn.midjourney.com/3a01e2de-38be-4cbd-b927-34f5f3d38426/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfADeepSpaceObjectSuchAsAB3a01e2de38be4cbdB92734f5f3d384260_0_Image.src = new URL(
    'https://cdn.midjourney.com/3a01e2de-38be-4cbd-b927-34f5f3d38426/0_0.png',
);
AnAbstractImageOfADeepSpaceObjectSuchAsAB3a01e2de38be4cbdB92734f5f3d384260_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfADeepSpaceObjectSuchAsAB3a01e2de38be4cbdB92734f5f3d384260_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfADeepSpaceObjectSuchAsAB3a01e2de38be4cbdB92734f5f3d384260_0_Image.content = content;
