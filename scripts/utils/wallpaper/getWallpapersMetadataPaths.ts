import glob from 'glob-promise';
import { join } from 'path';
import { getWallpapersDir } from './getWallpapersDir';

/**
 * @@@
 */

export async function getWallpapersMetadataPaths(): Promise<Array<string>> {
    const wallpapersDir = await getWallpapersDir();
    const wallpapersMetadataPaths = await glob(join(wallpapersDir, '*.json').split('\\').join('/'));

    return wallpapersMetadataPaths;
}
