import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Color } from '../../utils/color/Color';
import { textColor } from '../../utils/color/operators/furthest';
import { colorLuminance } from '../../utils/color/utils/colorLuminance';
import { useSsrDetection } from '../../utils/hooks/useSsrDetection';
import { useWallpaper } from '../../utils/hooks/useWallpaper';
import { randomItem } from '../../utils/randomItem';

/**
 * @@
 */
export function Aigen() {
    const router = useRouter();
    const isServerRender = useSsrDetection();
    const [
        {
            colorStats: { palette },
        },
    ] = useWallpaper();

    if (isServerRender) {
        // TODO: !! Allow when decided how to mark AI generated webpages
        return <></>;
    }

    let colors = palette.map(({ value }) => value).sort((a, b) => colorLuminance(b) - colorLuminance(a));

    if (colors.length < 2) {
        colors = [
            Color.fromHex('#ffcf86'),
            Color.fromHex('#ff723d'),
            Color.fromHex('#912920'),
            Color.fromHex('#792e33'),
            Color.fromHex('#270f1c'),
        ];
    } else if (colors.length < 9) {
        colors = [...colors, ...colors, ...colors, ...colors, ...colors, ...colors];
    }

    const letters = randomItem(
        [
            { letter: 'A', color: colors[0] },
            { letter: 'I', color: colors[1] },
            { letter: 'G', color: colors[3] },
            { letter: 'E', color: colors[4] },
            { letter: 'N', color: colors[5] },
        ],
        [
            { letter: 'A', color: colors[0] },
            { letter: 'I', color: colors[1] },
        ],
        [
            { letter: 'G', color: colors[0] },
            { letter: 'E', color: colors[1] },
            { letter: 'N', color: colors[3] },
            { letter: 'A', color: colors[4] },
            { letter: 'I', color: colors[5] },
        ],
        [
            { letter: 'G', color: colors[0] },
            { letter: 'E', color: colors[1] },
            { letter: 'N', color: colors[3] },
            { letter: 'E', color: colors[4] },
            { letter: 'R', color: colors[5] },
            { letter: 'A', color: colors[6] },
            { letter: 'T', color: colors[7] },
            { letter: 'E', color: colors[8] },
            { letter: 'D', color: colors[9] },
        ],
    );

    const y = randomItem('50%', '60%', '65%');
    const fontSize = randomItem('13', '14', '15', '16');
    const fontWeight = randomItem('normal', 'bold');
    const fontFamily = randomItem('monospace', 'sans-serif', 'serif', /*'cursive',*/ 'fantasy');

    const height = 10 + 30 * Math.random();
    const width = height * letters.length;

    return (
        <div
            style={{
                zIndex: 1000 /* <- [🔝] Global order of showcase */,
                position: randomItem('absolute', 'fixed') /* <- TODO: [🧠] absolute vs fixed*/,
                top: 0,
                right: 0,
            }}
        >
            <Link
                href={{
                    pathname: '/[wallpaper]',
                    query: {
                        wallpaper: router.query.wallpaper,
                        mode: router.query.mode,
                        page: 'explanation',
                    },
                }}
            >
                {randomItem(
                    <div style={{ marginRight: 5 }}>
                        {randomItem('← ', '<-', '↶', '') +
                            randomItem(
                                'Generated by AI',
                                'Created by AI',
                                'Made by AI',
                                'AI made',
                                'AI generated',
                                'AI',
                                'AIGEN',
                                'Generated',
                                'Produced by AI',
                                'Designed by AI',
                                'Engineered by AI',
                                'Crafted by AI',
                                'Fabricated by AI',
                                'Constructed by AI',
                                'Formulated by AI',
                                'Composed by AI',
                                'Programmed by AI',
                                'Generated by artificial intelligence',
                            )}
                    </div>,
                    <svg xmlns="http://www.w3.org/2000/svg" {...{ width, height }}>
                        {letters.map(({ letter, color }, i) => (
                            <React.Fragment key={i}>
                                <rect
                                    x={`${i * (100 / letters.length)}%`}
                                    y="0"
                                    width={`${100 / letters.length}%`}
                                    height="100%"
                                    fill={color.toHex()}
                                />
                                <text
                                    x={`${(i + 0.5) * (100 / letters.length)}%`}
                                    dominant-baseline="middle"
                                    text-anchor="middle"
                                    fill={color.then(textColor).toHex()}
                                    {...{ y, fontSize, fontWeight, fontFamily }}
                                >
                                    {letter}
                                </text>
                            </React.Fragment>
                        ))}
                    </svg>,
                )}
            </Link>
        </div>
    );
}

/**
 * TODO: [🧠] Test / think about / ask how to properly mark AI generated webpages
 * TODO: Maybe as external image
 * TODO: alt="← Generated by AI"
 */
