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
import colorStats from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_c86301bd-e6d0-406d-b790-12cd62d11ebb-0_1.colors.json';
import metadata from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_c86301bd-e6d0-406d-b790-12cd62d11ebb-0_1.json';
import texts from './Pavol_Hejn_a_close_up_of_a_ladybug_on_a_leaf_c86301bd-e6d0-406d-b790-12cd62d11ebb-0_1.texts.json';

/**
 * Image of A close-up of a ladybug on a leaf
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfALadybugOnALeafC86301bdE6d0406dB79012cd62d11ebb0_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a ladybug on a leaf"
            src="https://cdn.midjourney.com/c86301bd-e6d0-406d-b790-12cd62d11ebb/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpOfALadybugOnALeafC86301bdE6d0406dB79012cd62d11ebb0_1_Image.src = new URL(
    'https://cdn.midjourney.com/c86301bd-e6d0-406d-b790-12cd62d11ebb/0_1.png',
);
ACloseUpOfALadybugOnALeafC86301bdE6d0406dB79012cd62d11ebb0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfALadybugOnALeafC86301bdE6d0406dB79012cd62d11ebb0_1_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfALadybugOnALeafC86301bdE6d0406dB79012cd62d11ebb0_1_Image.texts = texts satisfies IWallpaperTexts;
