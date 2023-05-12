/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/9bc36e9b-41c0-4f87-970a-67b918fcaf70/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bc36e9b-41c0-4f87-970a-67b918fcaf70-0_0.colors.json';
import metadata from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bc36e9b-41c0-4f87-970a-67b918fcaf70-0_0.json';
import texts from './Pavol_Hejn_a_dreamy_watercolor_painting_of_a_field_of_flowers_f_9bc36e9b-41c0-4f87-970a-67b918fcaf70-0_0.texts.json';

/**
 * Image of A dreamy watercolor painting of a field of flowers for a wedding or event planning website
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A dreamy watercolor painting of a field of flowers for a wedding or event planning website"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_0_Image.colorStats =
    hydrateColorStats(colorStats);
ADreamyWatercolorPaintingOfAFieldOfFlowersF9bc36e9b41c04f87970a67b918fcaf700_0_Image.texts =
    texts satisfies IWallpaperTexts;
