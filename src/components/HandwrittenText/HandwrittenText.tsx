import { useEffect } from 'react';
import { forTime } from 'waitasecond';
import { classNames } from '../../utils/classNames';
import { Color } from '../../utils/color/Color';
import { randomItem } from '../../utils/randomItem';
import styles from './HandwrittenText.module.css';
import { handwriteText } from './utils/handwriteText';


interface HandwrittenTextProps {

    /**
     * The color of the text.
     */
    color: Color;


    /**
     * The text to be rendered as handwritten.
     */
    children: string /* <- TODO: [🎎] Allow to have there full JSX children */;
}


/**
 * A component that renders handwritten text using SVG and handwriteText function
 *
 * @returns A JSX element that contains the handwritten text and a fallback span element.
 */
export function HandwrittenText(props: HandwrittenTextProps) {
    const { children, color } = props;

    // TODO: Can be isMounted done better
    let isMounted: boolean;
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isMounted = true;
        return () => {
            isMounted = false;
        };
    }, [children, color]);

    return (
        <div className={styles.HandwrittenText}>
            {/* 
            <Image
                className={styles.primaryImage}
                alt={children}
                src={aiai}
                draggable="false"
                placeholder="empty" /* <- TODO: Blur * /
            />
            */}

            <svg
                className={styles.primaryImage}
                ref={async (svgElement) => {
                    if (!svgElement) {
                        return;
                    }

                    // TODO: Preload the script and model d.bin HERE
                    // > await loadAndRunExternalScript('/handwritten/script.js')

                    await forTime(100 /* <- !! How much is the true delay, can it work without delay? */);

                    if (!isMounted) {
                        return;
                    }

                    await handwriteText({
                        // TODO: !! Center
                        // TODO: !! Work with aspect ratio
                        text: children,
                        color,
                        speed: 3 /* 7 */,
                        bias: 0.75,
                        width: 1.5,
                        style: randomItem('CursiveSeparated' /* , 'FancyTall' */),
                        svgElement,
                    });
                }}
            >
                {/* <path id="path" d=""></path> */}
            </svg>

            <span className={classNames(/*passionsConflictFont.className,*/ styles.textFallback)}>{children}</span>
        </div>
    );
}

// TODO: [🎎] alt={removeMarkdownFormatting(removeMarkdownLinks(
