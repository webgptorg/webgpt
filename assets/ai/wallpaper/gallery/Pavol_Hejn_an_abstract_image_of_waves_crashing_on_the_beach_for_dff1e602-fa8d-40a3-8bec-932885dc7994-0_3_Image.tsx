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
import colorStats from './Pavol_Hejn_an_abstract_image_of_waves_crashing_on_the_beach_for_dff1e602-fa8d-40a3-8bec-932885dc7994-0_3.colors.json';
import content from './Pavol_Hejn_an_abstract_image_of_waves_crashing_on_the_beach_for_dff1e602-fa8d-40a3-8bec-932885dc7994-0_3.content.md';
import metadata from './Pavol_Hejn_an_abstract_image_of_waves_crashing_on_the_beach_for_dff1e602-fa8d-40a3-8bec-932885dc7994-0_3.json';

/**
 * Image of An abstract image of waves crashing on the beach for a vacation or travel website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract image of waves crashing on the beach for a vacation or travel website"
            src="https://cdn.midjourney.com/dff1e602-fa8d-40a3-8bec-932885dc7994/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_3_Image.src = new URL(
    'https://cdn.midjourney.com/dff1e602-fa8d-40a3-8bec-932885dc7994/0_3.png',
);
AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_3_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractImageOfWavesCrashingOnTheBeachForDff1e602Fa8d40a38bec932885dc79940_3_Image.content = content;
