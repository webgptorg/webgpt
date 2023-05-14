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
import colorStats from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_ai_work_tog_1e3d6a9d-2723-47a8-bb83-3d19ef02ef14-0_0.colors.json';
import content from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_ai_work_tog_1e3d6a9d-2723-47a8-bb83-3d19ef02ef14-0_0.content.md';
import metadata from './Pavol_Hejn_a_futuristic_cityscape_where_ainauts_and_ai_work_tog_1e3d6a9d-2723-47a8-bb83-3d19ef02ef14-0_0.json';

/**
 * Image of A futuristic cityscape where AInauts and AI work together to create massive, sustainable structures and infrastructure.
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AFuturisticCityscapeWhereAinautsAndAiWorkTog1e3d6a9d272347a8Bb833d19ef02ef140_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic cityscape where AInauts and AI work together to create massive, sustainable structures and infrastructure."
            src="https://cdn.midjourney.com/1e3d6a9d-2723-47a8-bb83-3d19ef02ef14/0_0.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AFuturisticCityscapeWhereAinautsAndAiWorkTog1e3d6a9d272347a8Bb833d19ef02ef140_0_Image.src = new URL(
    'https://cdn.midjourney.com/1e3d6a9d-2723-47a8-bb83-3d19ef02ef14/0_0.png',
);
AFuturisticCityscapeWhereAinautsAndAiWorkTog1e3d6a9d272347a8Bb833d19ef02ef140_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticCityscapeWhereAinautsAndAiWorkTog1e3d6a9d272347a8Bb833d19ef02ef140_0_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticCityscapeWhereAinautsAndAiWorkTog1e3d6a9d272347a8Bb833d19ef02ef140_0_Image.content = content;
