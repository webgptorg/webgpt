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
import colorStats from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bef1d06-bb03-4424-b9e1-0d88f404e0e6-0_1.colors.json';
import metadata from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bef1d06-bb03-4424-b9e1-0d88f404e0e6-0_1.json';
import texts from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bef1d06-bb03-4424-b9e1-0d88f404e0e6-0_1.texts.json';

/**
 * Image of A dreamy watercolor painting of a field of flowers for a wedding or event planning website
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADreamyWatercolorPaintingOfAFieldOfFlowersF9bef1d06Bb034424B9e10d88f404e0e60_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy watercolor painting of a field of flowers for a wedding or event planning website"
            src="https://cdn.midjourney.com/9bef1d06-bb03-4424-b9e1-0d88f404e0e6/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyWatercolorPaintingOfAFieldOfFlowersF9bef1d06Bb034424B9e10d88f404e0e60_1_Image.src = new URL(
    'https://cdn.midjourney.com/9bef1d06-bb03-4424-b9e1-0d88f404e0e6/0_1.png',
);
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bef1d06Bb034424B9e10d88f404e0e60_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bef1d06Bb034424B9e10d88f404e0e60_1_Image.colorStats =
    hydrateColorStats(colorStats);
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bef1d06Bb034424B9e10d88f404e0e60_1_Image.texts =
    texts satisfies IWallpaperTexts;
