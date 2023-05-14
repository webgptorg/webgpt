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
import colorStats from './Pavol_Hejn_a_playful_graphic_of_a_group_of_animals_in_a_jungle__2c1da9c3-fdf0-4fbd-aef1-b84c465ae5ab-0_3.colors.json';
import content from './Pavol_Hejn_a_playful_graphic_of_a_group_of_animals_in_a_jungle__2c1da9c3-fdf0-4fbd-aef1-b84c465ae5ab-0_3.content.md';
import metadata from './Pavol_Hejn_a_playful_graphic_of_a_group_of_animals_in_a_jungle__2c1da9c3-fdf0-4fbd-aef1-b84c465ae5ab-0_3.json';

/**
 * Image of A playful graphic of a group of animals in a jungle for a children's or education website
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function APlayfulGraphicOfAGroupOfAnimalsInAJungle2c1da9c3Fdf04fbdAef1B84c465ae5ab0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A playful graphic of a group of animals in a jungle for a children's or education website"
            src="https://cdn.midjourney.com/2c1da9c3-fdf0-4fbd-aef1-b84c465ae5ab/0_3.png"
            draggable="false"
            placeholder="blur"
            blurDataURL={colorToDataUrl(Color.fromHex(colorStats.averageColor))}
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}
APlayfulGraphicOfAGroupOfAnimalsInAJungle2c1da9c3Fdf04fbdAef1B84c465ae5ab0_3_Image.src = new URL(
    'https://cdn.midjourney.com/2c1da9c3-fdf0-4fbd-aef1-b84c465ae5ab/0_3.png',
);
APlayfulGraphicOfAGroupOfAnimalsInAJungle2c1da9c3Fdf04fbdAef1B84c465ae5ab0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APlayfulGraphicOfAGroupOfAnimalsInAJungle2c1da9c3Fdf04fbdAef1B84c465ae5ab0_3_Image.colorStats =
    hydrateColorStats(colorStats);
APlayfulGraphicOfAGroupOfAnimalsInAJungle2c1da9c3Fdf04fbdAef1B84c465ae5ab0_3_Image.content = content;
