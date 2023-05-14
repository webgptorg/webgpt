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
import colorStats from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_695bccbd-d3dd-46e3-82c6-bd6769d9ccfe-0_3.colors.json';
import content from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_695bccbd-d3dd-46e3-82c6-bd6769d9ccfe-0_3.content.md';
import metadata from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_695bccbd-d3dd-46e3-82c6-bd6769d9ccfe-0_3.json';

/**
 * Image of A whimsical tea party with anthropomorphic animals
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalTeaPartyWithAnthropomorphicAnimals695bccbdD3dd46e382c6Bd6769d9ccfe0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical tea party with anthropomorphic animals"
            src="https://cdn.midjourney.com/695bccbd-d3dd-46e3-82c6-bd6769d9ccfe/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
AWhimsicalTeaPartyWithAnthropomorphicAnimals695bccbdD3dd46e382c6Bd6769d9ccfe0_3_Image.src = new URL(
    'https://cdn.midjourney.com/695bccbd-d3dd-46e3-82c6-bd6769d9ccfe/0_3.png',
);
AWhimsicalTeaPartyWithAnthropomorphicAnimals695bccbdD3dd46e382c6Bd6769d9ccfe0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalTeaPartyWithAnthropomorphicAnimals695bccbdD3dd46e382c6Bd6769d9ccfe0_3_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalTeaPartyWithAnthropomorphicAnimals695bccbdD3dd46e382c6Bd6769d9ccfe0_3_Image.content = content;
