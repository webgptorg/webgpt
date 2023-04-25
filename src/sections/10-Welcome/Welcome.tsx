import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Article } from '../../components/Article/Article';
import { HandwrittenText } from '../../components/HandwrittenText/HandwrittenText';
import { Section } from '../../components/Section/Section';
import { removeMarkdownFormatting } from '../../utils/content/removeMarkdownFormatting';
import { removeMarkdownLinks } from '../../utils/content/removeMarkdownLinks';
import styles from './Welcome.module.css';

interface WelcomeProps {
    variant: 'HOMEPAGE' | 'SIDEPAGE' | 'PAVOLHEJNY';
}

export function WelcomeSection(props: WelcomeProps) {
    const { variant } = props;

    const { t, i18n } = useTranslation();

    const header = (
        <h1 className={styles.handritten}>
            <HandwrittenText>
                {removeMarkdownFormatting(removeMarkdownLinks(t('title')))}
                {/* <- TODO: [🎎] Allow to have there full JSX with formatting like <Article content={t('title')} isEnhanced /> OR pass as markdown*/}
            </HandwrittenText>
        </h1>
    );

    return (
        <Section id="Welcome" className={styles.WelcomeSection}>
            {variant === 'HOMEPAGE' && header}
            {variant === 'SIDEPAGE' && <Link href="/">{header}</Link>}

            {variant === 'HOMEPAGE' && <Article content={t('Welcome.content')} isEnhanced />}

            {variant === 'SIDEPAGE' && (
                <Link className="button" href="/">
                    {t('Welcome.back-home')}
                </Link>
            )}
        </Section>
    );
}
