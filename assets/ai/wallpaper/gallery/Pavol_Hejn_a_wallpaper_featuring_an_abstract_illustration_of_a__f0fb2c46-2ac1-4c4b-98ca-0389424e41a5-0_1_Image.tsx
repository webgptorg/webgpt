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
import colorStats from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__f0fb2c46-2ac1-4c4b-98ca-0389424e41a5-0_1.colors.json';
import metadata from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__f0fb2c46-2ac1-4c4b-98ca-0389424e41a5-0_1.json';
import texts from './Pavol_Hejn_a_wallpaper_featuring_an_abstract_illustration_of_a__f0fb2c46-2ac1-4c4b-98ca-0389424e41a5-0_1.texts.json';

/**
 * Image of A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A wallpaper featuring an abstract illustration of a dark and ominous machine, with glowing red lights and mechanical parts."
            src="https://cdn.midjourney.com/f0fb2c46-2ac1-4c4b-98ca-0389424e41a5/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_1_Image.src = new URL(
    'https://cdn.midjourney.com/f0fb2c46-2ac1-4c4b-98ca-0389424e41a5/0_1.png',
);
AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_1_Image.colorStats =
    hydrateColorStats(colorStats);
AWallpaperFeaturingAnAbstractIllustrationOfAF0fb2c462ac14c4b98ca0389424e41a50_1_Image.texts =
    texts satisfies IWallpaperTexts;
