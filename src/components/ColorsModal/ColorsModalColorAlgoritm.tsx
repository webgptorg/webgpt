import { useState } from 'react';
import { forAnimationFrame } from 'waitasecond';
import { COLORSTATS_COMPUTE_METHODS } from '../../../config';
import { useCurrentWallpaper } from '../../utils/hooks/useCurrentWallpaper';
import { createImageInBrowser } from '../../utils/image/createImageInBrowser';
import { Select } from '../Select/Select';

/**
 * Renders a select picker to compute color statistics for a wallpaper using different algorithms
 */
export function ColorsModalColorAlgoritm() {
    const [wallpaper, modifyWallpaper] = useCurrentWallpaper();
    const [isComputing, setComputing] = useState(false);

    return (
        <>
            <Select
                isDisabled={isComputing}
                label="Color algorithm"
                value={wallpaper.colorStats.version}
                onChange={async (newVersion) => {
                    setComputing(true);
                    await forAnimationFrame();

                    try {
                        const compute = COLORSTATS_COMPUTE_METHODS.find(({ version }) => newVersion === version);
                        if (!compute) {
                            setComputing(false);
                            throw new Error(`Unknown color algorithm version: ${newVersion}`);
                        }

                        // TODO: !! [🧠] Whe best way to report progress from createImageInBrowser and compute

                        const start = performance.now();
                        console.info('🎨', { wallpaper });

                        const image = await createImageInBrowser(wallpaper.src);
                        console.info('🎨', { image });

                        const newColorStats = await compute(image);

                        console.info('🎨', { newColorStats });
                        const end = performance.now();
                        const duration = end - start;
                        console.info(
                            '🎨',
                            `Compute of ${newVersion} took ${Math.ceil(((duration / 1000) * 10) / 10)}s`,
                        );

                        modifyWallpaper((modifiedWallpaper) => {
                            modifiedWallpaper.colorStats = newColorStats;
                            modifiedWallpaper.saveStage = 'EDITED';
                            return modifiedWallpaper;
                        });
                    } catch (error) {
                        if (!(error instanceof Error)) {
                            throw error;
                        }

                        console.error(error);
                        alert(`There was an error while computing colors via ${newVersion}\n\n${error.message}`);
                    } finally {
                        setComputing(false);
                    }
                }}
                visibleButtons={0}
                options={Object.fromEntries(COLORSTATS_COMPUTE_METHODS.map(({ version }) => [version, version]))}
            />
            {/* TODO: isComputing && <TaskInProgress isSmall /> */}
        </>
    );
}
