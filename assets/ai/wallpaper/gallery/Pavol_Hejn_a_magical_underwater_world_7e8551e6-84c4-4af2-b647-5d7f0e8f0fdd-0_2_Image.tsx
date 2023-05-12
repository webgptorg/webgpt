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
import colorStats from './Pavol_Hejn_a_magical_underwater_world_7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd-0_2.colors.json';
import metadata from './Pavol_Hejn_a_magical_underwater_world_7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd-0_2.json';
import texts from './Pavol_Hejn_a_magical_underwater_world_7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd-0_2.texts.json';

/**
 * Image of A magical underwater world
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A magical underwater world"
            src="https://cdn.midjourney.com/7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_2_Image.colorStats = hydrateColorStats(colorStats);
AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_2_Image.texts = texts satisfies IWallpaperTexts;
