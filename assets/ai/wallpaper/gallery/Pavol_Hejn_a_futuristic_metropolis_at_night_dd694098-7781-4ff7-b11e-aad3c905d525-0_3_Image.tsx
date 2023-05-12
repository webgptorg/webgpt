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
import colorStats from './Pavol_Hejn_a_futuristic_metropolis_at_night_dd694098-7781-4ff7-b11e-aad3c905d525-0_3.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_metropolis_at_night_dd694098-7781-4ff7-b11e-aad3c905d525-0_3.json';
import texts from './Pavol_Hejn_a_futuristic_metropolis_at_night_dd694098-7781-4ff7-b11e-aad3c905d525-0_3.texts.json';

/**
 * Image of A futuristic metropolis at night
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AFuturisticMetropolisAtNightDd69409877814ff7B11eAad3c905d5250_3_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic metropolis at night"
            src="https://cdn.midjourney.com/dd694098-7781-4ff7-b11e-aad3c905d525/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticMetropolisAtNightDd69409877814ff7B11eAad3c905d5250_3_Image.metadata = metadata satisfies IWallpaperMetadata;
AFuturisticMetropolisAtNightDd69409877814ff7B11eAad3c905d5250_3_Image.colorStats = hydrateColorStats(colorStats);
AFuturisticMetropolisAtNightDd69409877814ff7B11eAad3c905d5250_3_Image.texts = texts satisfies IWallpaperTexts;
