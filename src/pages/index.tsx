import { Oswald } from '@next/font/google';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { Vector } from 'xyzt';
import { getWallpapers } from '../../scripts/utils/wallpaper/getWallpapers';
import { IWallpaper } from '../../src/utils/IWallpaper';
import { DebugGrid } from '../components/DebugGrid/DebugGrid';
import { ImagineTag } from '../components/ImagineTag/ImagineTag';
import { Item } from '../components/Items/Item';
import { Items } from '../components/Items/Items';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { StaticAppHead } from '../sections/00-AppHead/StaticAppHead';
import { FooterSection } from '../sections/90-Footer/Footer';
import { GallerySection } from '../sections/Gallery/Gallery';
import styles from '../styles/static.module.css';
import { classNames } from '../utils/classNames';
import { colorToDataUrl } from '../utils/color/utils/colorToDataUrl';
import { WallpapersContext } from '../utils/hooks/useWallpaper';
import { hydrateWallpaper } from '../utils/hydrateWallpaper';

const oswaltFont = Oswald({ weight: '400', style: 'normal', subsets: ['latin', 'latin-ext'] });

export interface PageProps {
    wallpapers: Array<IWallpaper>;
}

export default function GalleryPage({ wallpapers }: PageProps) {
    return (
        <WallpapersContext.Provider
            value={wallpapers.map(hydrateWallpaper)} /* <- Is this the right place to be Provider in? */
        >
            <StaticAppHead subtitle={null} />

            <div className={classNames(styles.page, oswaltFont.className)}>
                <DebugGrid size={new Vector(5, 5)} />
                <header>{/* <HeaderWallpaper /> */}</header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    {/* !!! <HomepageWelcomeSection variant="SIDEPAGE" />*/}
                    <GallerySection />
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </WallpapersContext.Provider>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            wallpapers: await getWallpapers(),
        },
    };
}

/**
 * TODO: !!! [🧶] FAQ section - how it works
 * TODO: !!! Design for gallery - split showcase and gallery
 * TODO: !!! [1] Filters - [Fulltext][Light/Dark/Color]
 * TODO: !!! [1] Order - [Relevance][DateGenerated][Random][Lightness][Color] / [ASC][DESC]
 * TODO: !!! [1] Limit
 * TODO: !! [1] Pagination
 * TODO: !! Preview page on hover on each item
 * TODO: [🪒] Can be getStaticProps shared between all pages?
 * TODO: [🪒] Can be fonts shared between all pages?
 * TODO: Write better about how are images created
 *       TODO: Connect with section/article about AI generative technology
 * TODO: [🧈] Best way how to share page css
 * TODO: [🔗] ACRY should we use <a ...>...</a> OR <Link ...>...</Link> for external links in Next App
 */
