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
import colorStats from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_4549d90b-be3d-4e4a-9f24-dd6accce4587-0_3.colors.json';
import content from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_4549d90b-be3d-4e4a-9f24-dd6accce4587-0_3.content.md';
import metadata from './Pavol_Hejn_a_neon_cityscape_with_futuristic_skyscrapers_for_a_t_4549d90b-be3d-4e4a-9f24-dd6accce4587-0_3.json';

/**
 * Image of A neon cityscape with futuristic skyscrapers for a tech blog homepage
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ANeonCityscapeWithFuturisticSkyscrapersForAT4549d90bBe3d4e4a9f24Dd6accce45870_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A neon cityscape with futuristic skyscrapers for a tech blog homepage"
            src="https://cdn.midjourney.com/4549d90b-be3d-4e4a-9f24-dd6accce4587/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
ANeonCityscapeWithFuturisticSkyscrapersForAT4549d90bBe3d4e4a9f24Dd6accce45870_3_Image.src = new URL(
    'https://cdn.midjourney.com/4549d90b-be3d-4e4a-9f24-dd6accce4587/0_3.png',
);
ANeonCityscapeWithFuturisticSkyscrapersForAT4549d90bBe3d4e4a9f24Dd6accce45870_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ANeonCityscapeWithFuturisticSkyscrapersForAT4549d90bBe3d4e4a9f24Dd6accce45870_3_Image.colorStats =
    hydrateColorStats(colorStats);
ANeonCityscapeWithFuturisticSkyscrapersForAT4549d90bBe3d4e4a9f24Dd6accce45870_3_Image.content = content;
