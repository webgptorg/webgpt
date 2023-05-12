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
import colorStats from './Pavol_Hejn_a_futuristic_laboratory_where_ainauts_use_ai_and_adv_8cbbc87f-f5bd-4378-b4b7-67f4011d6d46-0_1.colors.json';
import metadata from './Pavol_Hejn_a_futuristic_laboratory_where_ainauts_use_ai_and_adv_8cbbc87f-f5bd-4378-b4b7-67f4011d6d46-0_1.json';
import texts from './Pavol_Hejn_a_futuristic_laboratory_where_ainauts_use_ai_and_adv_8cbbc87f-f5bd-4378-b4b7-67f4011d6d46-0_1.texts.json';

/**
 * Image of A futuristic laboratory where AInauts use AI and advanced technology to create new forms of life.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AFuturisticLaboratoryWhereAinautsUseAiAndAdv8cbbc87fF5bd4378B4b767f4011d6d460_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A futuristic laboratory where AInauts use AI and advanced technology to create new forms of life."
            src="https://cdn.midjourney.com/8cbbc87f-f5bd-4378-b4b7-67f4011d6d46/0_1.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AFuturisticLaboratoryWhereAinautsUseAiAndAdv8cbbc87fF5bd4378B4b767f4011d6d460_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AFuturisticLaboratoryWhereAinautsUseAiAndAdv8cbbc87fF5bd4378B4b767f4011d6d460_1_Image.colorStats =
    hydrateColorStats(colorStats);
AFuturisticLaboratoryWhereAinautsUseAiAndAdv8cbbc87fF5bd4378B4b767f4011d6d460_1_Image.texts =
    texts satisfies IWallpaperTexts;
