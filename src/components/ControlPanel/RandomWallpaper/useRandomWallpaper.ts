import { useMemo } from 'react';
import { useCurrentWallpaperId } from '../../../utils/hooks/useCurrentWallpaperId';
import { usePromise } from '../../../utils/hooks/usePromise';
import { IWallpaperInStorage, RandomWallpaperManager } from './RandomWallpaperManager';

let randomWallpaperManager: RandomWallpaperManager | null = null;

export function useRandomWallpaper(): IWallpaperInStorage | null {
    const wallpaperId = useCurrentWallpaperId();

    if (!randomWallpaperManager) {
        randomWallpaperManager = new RandomWallpaperManager();
    }
    const randomWallpaperPromise = useMemo(
        () => randomWallpaperManager!.consumeRandomWallpaper(wallpaperId),
        [wallpaperId],
    );
    const { value } = usePromise(randomWallpaperPromise);
    return value || null;
}
