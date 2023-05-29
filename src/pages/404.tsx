import { GalleryPageProps } from '.';
import { Section } from '../components/Section/Section';
import { TiledBackground } from '../components/TiledBackground/TiledBackground';
import { StaticAppHead } from '../sections/00-AppHead/StaticAppHead';
import { FooterSection } from '../sections/90-Footer/Footer';
import styles from '../styles/static.module.css';

export default function NotFoundPage({ wallpapers }: GalleryPageProps) {
    return (
        <>
            <StaticAppHead subtitle="Not found" /* <- TODO: !! Translate */ />

            <div className={styles.page}>
                <header>
                    {/* TODO: Do some system for multiple pages */}
                    {/* <CaveSection /> */}
                </header>
                <div className={styles.background}>
                    {/* TODO: Do some system for multiple pages */}
                    <TiledBackground />
                </div>
                <main>
                    {/* <WelcomeSection variant="SIDEPAGE" /> */}
                    <Section>
                        <h2>Nothing found here</h2>
                        {/* TODO: Some better texting <p>Sorry for that</p> */}
                    </Section>
                </main>
                <footer>
                    <FooterSection />
                </footer>
            </div>
        </>
    );
}
