/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/83d94335-7745-4612-8800-f9bdd08d72b5/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_83d94335-7745-4612-8800-f9bdd08d72b5-0_0.colors.json';
import metadata from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_83d94335-7745-4612-8800-f9bdd08d72b5-0_0.json';
import texts from './Pavol_Hejn_a_whimsical_tea_party_with_anthropomorphic_animals_83d94335-7745-4612-8800-f9bdd08d72b5-0_0.texts.json';

/**
 * Image of A whimsical tea party with anthropomorphic animals
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A whimsical tea party with anthropomorphic animals"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_0_Image.colorStats =
    hydrateColorStats(colorStats);
AWhimsicalTeaPartyWithAnthropomorphicAnimals83d94335774546128800F9bdd08d72b50_0_Image.texts =
    texts satisfies IWallpaperTexts;
