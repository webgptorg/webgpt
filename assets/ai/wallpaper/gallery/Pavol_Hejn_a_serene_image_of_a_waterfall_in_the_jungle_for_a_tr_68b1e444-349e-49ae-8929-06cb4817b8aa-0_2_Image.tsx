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
import colorStats from './Pavol_Hejn_a_serene_image_of_a_waterfall_in_the_jungle_for_a_tr_68b1e444-349e-49ae-8929-06cb4817b8aa-0_2.colors.json';
import metadata from './Pavol_Hejn_a_serene_image_of_a_waterfall_in_the_jungle_for_a_tr_68b1e444-349e-49ae-8929-06cb4817b8aa-0_2.json';
import texts from './Pavol_Hejn_a_serene_image_of_a_waterfall_in_the_jungle_for_a_tr_68b1e444-349e-49ae-8929-06cb4817b8aa-0_2.texts.json';

/**
 * Image of A serene image of a waterfall in the jungle for a travel or adventure website
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A serene image of a waterfall in the jungle for a travel or adventure website"
            src="https://cdn.midjourney.com/68b1e444-349e-49ae-8929-06cb4817b8aa/0_2.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_2_Image.src = new URL(
    'https://cdn.midjourney.com/68b1e444-349e-49ae-8929-06cb4817b8aa/0_2.png',
);
ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_2_Image.colorStats =
    hydrateColorStats(colorStats);
ASereneImageOfAWaterfallInTheJungleForATr68b1e444349e49ae892906cb4817b8aa0_2_Image.texts =
    texts satisfies IWallpaperTexts;
