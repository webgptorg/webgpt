import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StaticAppHead } from '../components/AppHead/StaticAppHead';
import { RandomWallpaperManager } from '../components/ControlPanel/RandomWallpaper/RandomWallpaperManager';
import styles from '../styles/static.module.css';

export default function HomePage() {
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const randomWallpaperManager = RandomWallpaperManager.getInstance();
            const wallpaper = await randomWallpaperManager.getWelcomeWallpaper();
            router.replace(`/${wallpaper.id}`);
        })();
    });

    return (
        <>
            <StaticAppHead subtitle={null} />

            <div className={styles.page}>
                <main>
                    <h1
                        style={{
                            display:
                                'none' /* <- TODO: For SEO/Social is it better to have invisible <h1> or just <title> + meta tags */,
                        }}
                    >
                        1-2i
                    </h1>
                    <Image
                        className={styles.loading}
                        alt="Loading"
                        src="/icons/loading.svg"
                        width={40}
                        height={40} /* <-[🧥] */
                    />
                    {/* TODO: Branding: Make more cool loading animation */}
                </main>
            </div>
        </>
    );
}

/**
 * TODO: Go to last wallpaper
 * TODO: Make shuffle between wallpapers
 */
