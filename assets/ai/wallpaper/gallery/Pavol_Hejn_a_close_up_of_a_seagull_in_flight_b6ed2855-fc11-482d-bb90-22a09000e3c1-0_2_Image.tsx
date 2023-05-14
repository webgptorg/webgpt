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
import colorStats from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_b6ed2855-fc11-482d-bb90-22a09000e3c1-0_2.colors.json';
import content from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_b6ed2855-fc11-482d-bb90-22a09000e3c1-0_2.content.md';
import metadata from './Pavol_Hejn_a_close_up_of_a_seagull_in_flight_b6ed2855-fc11-482d-bb90-22a09000e3c1-0_2.json';

/**
 * Image of A close-up of a seagull in flight
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACloseUpOfASeagullInFlightB6ed2855Fc11482dBb9022a09000e3c10_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A close-up of a seagull in flight"
            src="https://cdn.midjourney.com/b6ed2855-fc11-482d-bb90-22a09000e3c1/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ACloseUpOfASeagullInFlightB6ed2855Fc11482dBb9022a09000e3c10_2_Image.src = new URL(
    'https://cdn.midjourney.com/b6ed2855-fc11-482d-bb90-22a09000e3c1/0_2.png',
);
ACloseUpOfASeagullInFlightB6ed2855Fc11482dBb9022a09000e3c10_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACloseUpOfASeagullInFlightB6ed2855Fc11482dBb9022a09000e3c10_2_Image.colorStats = hydrateColorStats(colorStats);
ACloseUpOfASeagullInFlightB6ed2855Fc11482dBb9022a09000e3c10_2_Image.content = content;
