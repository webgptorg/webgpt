/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import source from 'https://cdn.midjourney.com/c55ae938-8e99-4401-8367-fc495c5e7637/0_0.png';
import Image from 'next/image';
import { hydrateColorStats } from '../../../../src/utils/image/utils/hydrateColorStats';
import { IWallpaperComponentProps, IWallpaperMetadata, IWallpaperTexts } from '../IWallpaperComponent';
import colorStats from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_c55ae938-8e99-4401-8367-fc495c5e7637-0_0.colors.json';
import metadata from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_c55ae938-8e99-4401-8367-fc495c5e7637-0_0.json';
import texts from './Pavol_Hejn_an_abstract_interpretation_of_a_thunderstorm_c55ae938-8e99-4401-8367-fc495c5e7637-0_0.texts.json';

/**
 * Image of An abstract interpretation of a thunderstorm
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnAbstractInterpretationOfAThunderstormC55ae9388e9944018367Fc495c5e76370_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An abstract interpretation of a thunderstorm"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnAbstractInterpretationOfAThunderstormC55ae9388e9944018367Fc495c5e76370_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnAbstractInterpretationOfAThunderstormC55ae9388e9944018367Fc495c5e76370_0_Image.colorStats =
    hydrateColorStats(colorStats);
AnAbstractInterpretationOfAThunderstormC55ae9388e9944018367Fc495c5e76370_0_Image.texts =
    texts satisfies IWallpaperTexts;
