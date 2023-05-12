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
import colorStats from './Pavol_Hejn_a_city_skyline_at_night_99a0ea6a-14ed-44fb-8c18-c0879b0ed312-0_3.colors.json';
import metadata from './Pavol_Hejn_a_city_skyline_at_night_99a0ea6a-14ed-44fb-8c18-c0879b0ed312-0_3.json';
import texts from './Pavol_Hejn_a_city_skyline_at_night_99a0ea6a-14ed-44fb-8c18-c0879b0ed312-0_3.texts.json';

/**
 * Image of A city skyline at night
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ACitySkylineAtNight99a0ea6a14ed44fb8c18C0879b0ed3120_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A city skyline at night"
            src="https://cdn.midjourney.com/99a0ea6a-14ed-44fb-8c18-c0879b0ed312/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACitySkylineAtNight99a0ea6a14ed44fb8c18C0879b0ed3120_3_Image.src = new URL(
    'https://cdn.midjourney.com/99a0ea6a-14ed-44fb-8c18-c0879b0ed312/0_3.png',
);
ACitySkylineAtNight99a0ea6a14ed44fb8c18C0879b0ed3120_3_Image.metadata = metadata satisfies IWallpaperMetadata;
ACitySkylineAtNight99a0ea6a14ed44fb8c18C0879b0ed3120_3_Image.colorStats = hydrateColorStats(colorStats);
ACitySkylineAtNight99a0ea6a14ed44fb8c18C0879b0ed3120_3_Image.texts = texts satisfies IWallpaperTexts;
