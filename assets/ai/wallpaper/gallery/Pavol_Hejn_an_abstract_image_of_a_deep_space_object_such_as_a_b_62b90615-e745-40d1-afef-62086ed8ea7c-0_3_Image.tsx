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
import colorStats from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_62b90615-e745-40d1-afef-62086ed8ea7c-0_3.colors.json';
import metadata from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_62b90615-e745-40d1-afef-62086ed8ea7c-0_3.json';
import texts from './Pavol_Hejn_an_abstract_image_of_a_deep_space_object_such_as_a_b_62b90615-e745-40d1-afef-62086ed8ea7c-0_3.texts.json';

/**
 * Image of An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns.
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of a deep space object, such as a black hole or pulsar, with swirling colors and patterns."
            src="https://cdn.midjourney.com/62b90615-e745-40d1-afef-62086ed8ea7c/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfADeepSpaceObjectSuchAsAB62b90615E74540d1Afef62086ed8ea7c0_3_Image.texts =
    texts satisfies IWallpaperTexts;
