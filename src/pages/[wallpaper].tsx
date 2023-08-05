import { readFile } from 'fs/promises';
import { GetStaticPaths } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { join } from 'path';
import { getHardcodedWallpapers } from '../../scripts/utils/hardcoded-wallpaper/getHardcodedWallpapers';
import { ShowcaseAppHead } from '../components/AppHead/ShowcaseAppHead';
import { PreventUnsavedChanges } from '../components/PreventUnsavedChanges/Sample';
import { ShowcaseContent } from '../components/ShowcaseContent/ShowcaseContent';
import { ShowcaseContentEdit } from '../components/ShowcaseContentEdit/ShowcaseContentEdit';
import { SkinStyle } from '../components/SkinStyle/SkinStyle';
import { useMode } from '../utils/hooks/useMode';
import { WallpapersContext } from '../utils/hooks/WallpapersContext';
import { hydrateWallpapersCached } from '../utils/hydrateWallpapersCached';
import { IWallpaperSerialized } from '../utils/IWallpaper';
import { getSupabaseForServer } from '../utils/supabase/getSupabaseForServer';
import { string_wallpaper_id } from '../utils/typeAliases';
import { validateUuid } from '../utils/validateUuid';

interface ShowcasePageProps {
    currentWallpaper: null | IWallpaperSerialized;
}

export default function ShowcasePage(props: ShowcasePageProps) {
    let { currentWallpaper } = props;
    const { isEditable } = useMode();

    if (currentWallpaper === undefined) {
        return <div>Loading...</div> /* <- TODO: Better loading + [👠] Some standard standalone page*/;
    }

    if (currentWallpaper === null) {
        return (
            <div>
                Not found
                <br />
                <Link href="/" /*className={'button'} */>Pick from gallery</Link>
                {/*
                TODO: Pass randomWallpaper in non-hardcoded wallpapers
                <Link href={`/${randomWallpaper.id}`} className={'button'}>
                    Show random
                </Link>
                */}
            </div> /* <- TODO: Better 404 + http 404 + [👠] Some standard standalone page*/
        );
    }

    return (
        <WallpapersContext.Provider
            value={hydrateWallpapersCached([currentWallpaper])} /* <- Is this the right place to be Provider in? */
        >
            <ShowcaseAppHead />
            <SkinStyle />
            {/* TODO: <LanguagePicker /> */}

            {/* <Debug /> */}

            {<ShowcaseContent />}
            {isEditable && <ShowcaseContentEdit />}
            {isEditable && <PreventUnsavedChanges />}
        </WallpapersContext.Provider>
    );
}

export const getStaticPaths: GetStaticPaths<{ wallpaper: string }> = async () => {
    const prerenderWallpapersIds = new Set<string_wallpaper_id>();

    for (const wallpaper of await getHardcodedWallpapers()) {
        prerenderWallpapersIds.add(wallpaper.id);
    }

    for (const wallpaper of JSON.parse(
        await readFile(
            join(__dirname, '../../public/mocked-api/wallpapers-min-loved.json') /* <- TODO: [✍] */,
            'utf-8',
        ),
    ) as Array<{
        id: string_wallpaper_id;
    }>) {
        prerenderWallpapersIds.add(wallpaper.id);
    }

    return {
        paths: Array.from(prerenderWallpapersIds).map((wallpaperId) => `/${wallpaperId}`), // <- Note: indicates which pages needs be created at build time
        fallback: 'blocking',
    };
};

export async function getStaticProps({
    locale,
    params,
}: {
    locale: string;
    params: any /* <- TODO: !! Type propperly + NOT manually */;
}) {
    const { wallpaper /* <- TODO: !!! Change ACRY to wallpaperId */ } = params;

    // TODO: [🥽] DRY - getWallpaper
    // TODO: !!! First dynamic then hardcoded
    const wallpapers: Array<IWallpaperSerialized> = await getHardcodedWallpapers().catch((error) => [
        /* Note: On server, "Error: Could not find assets folder" will happen */
    ]);
    let currentWallpaper = wallpapers.find(({ id }) => id === wallpaper) || null;
    if (!currentWallpaper) {
        const selectResult = await getSupabaseForServer().from('Wallpaper').select('*').eq('id', wallpaper);
        if (selectResult && selectResult.data && selectResult.data.length > 0) {
            currentWallpaper = {
                ...selectResult.data[0],
                author: validateUuid(selectResult.data[0].author),
            };
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            currentWallpaper,
        },
    };
}

/**
 * TODO: !!! Font must be applied to whole page NOT only the article
 * TODO: Special effect for each wallpaper
 * TODO: !! Preview as on [Mobile][Tablet][Desktop]
 * TODO: !! Preview as on [Mobile][Tablet] - show the direct QR code
 * TODO: !! Make foreground-background paralax effect for each wallpaper @see https://huggingface.co/spaces/radames/dpt-depth-estimation-3d-obj

 * TODO: Add somewhere button [Get in touch]
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: Some linting rule not to use:
 *       NOT> import { useTranslation } from 'react-i18next';
 *       BUT
 *       YES> import { useTranslation } from 'next-i18next';
 * TODO: !! Better url than /...
 * TODO: [👕][🧠] What should be the ID of customized wallpaper?
 */
