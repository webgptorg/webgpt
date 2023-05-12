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
import colorStats from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_0.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_0.json';
import texts from './Pavol_Hejn_a_close_up_of_a_dragonfly_on_a_leaf_58fe3ba9-386c-496a-b9b2-72545d06b1ac-0_0.texts.json';

/**
 * Image of A close-up of a dragonfly on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a dragonfly on a leaf"
            src="https://cdn.midjourney.com/58fe3ba9-386c-496a-b9b2-72545d06b1ac/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfADragonflyOnALeaf58fe3ba9386c496aB9b272545d06b1ac0_0_Image.texts = texts satisfies IWallpaperTexts;
