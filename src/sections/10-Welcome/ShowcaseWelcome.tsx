import { useEffect, useState } from 'react';
import { Article } from '../../components/Article/Article';
import { Section } from '../../components/Section/Section';
import { useWallpaper } from '../../utils/hooks/useWallpaper';
import styles from './Welcome.module.css';

/**
 * @@@
 */
export function ShowcaseWelcomeSection() {
    const wallpaper = useWallpaper();

    // TODO:!!! Just hack for [⛑]
    // Render component every second
    const [tick, setTick] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => setTick(tick + 1), 1000);
        return () => clearTimeout(timeout);
    });

    return (
        <Section id="Welcome" className={styles.WelcomeSection}>
            {/*
            <h1 className={styles.handritten}>
                <HandwrittenText color={skin.highlightedTextColor}>{wallpaper.title}</HandwrittenText>
            </h1>
            */}

            <style>{`
                @import url(https://fonts.googleapis.com/css2?family=${wallpaper.font
                    .split(' ')
                    .join('+')}&amp;display=swap});
            `}</style>
            <div
                style={{
                    fontFamily: `'${wallpaper.font}', sans-serif` /* <- Use only in one place OR link by tag */,
                }}
                onClick={(event) => {
                    (event.target as HTMLDivElement).setAttribute('contenteditable', 'true');
                    (event.target as HTMLDivElement).setAttribute('spellcheck', 'false');
                    // TODO: !!! Also save the changes after editing
                }}
            >
                <Article content={wallpaper.content} />
            </div>
        </Section>
    );
}

/**
 * TODO: [🧬] !!! Fake generating - write tokenized text
 * TODO: !! [👕] Allow to edit the header position + other things
 * TODO: !! This should be really named ShowcaseSection because it cointains mere then welcome
 */
