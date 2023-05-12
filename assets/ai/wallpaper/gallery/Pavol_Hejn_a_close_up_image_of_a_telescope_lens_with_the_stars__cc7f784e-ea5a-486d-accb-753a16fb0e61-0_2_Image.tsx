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
import colorStats from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__cc7f784e-ea5a-486d-accb-753a16fb0e61-0_2.colors.json';
import metadata from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__cc7f784e-ea5a-486d-accb-753a16fb0e61-0_2.json';
import texts from './Pavol_Hejn_a_close_up_image_of_a_telescope_lens_with_the_stars__cc7f784e-ea5a-486d-accb-753a16fb0e61-0_2.texts.json';

/**
 * Image of A close-up image of a telescope lens, with the stars and planets visible in the reflection.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up image of a telescope lens, with the stars and planets visible in the reflection."
            src="https://cdn.midjourney.com/cc7f784e-ea5a-486d-accb-753a16fb0e61/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_2_Image.src = new URL(
    'https://cdn.midjourney.com/cc7f784e-ea5a-486d-accb-753a16fb0e61/0_2.png',
);
ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_2_Image.colorStats =
    hydrateColorStats(colorStats);
ACloseUpImageOfATelescopeLensWithTheStarsCc7f784eEa5a486dAccb753a16fb0e610_2_Image.texts =
    texts satisfies IWallpaperTexts;
