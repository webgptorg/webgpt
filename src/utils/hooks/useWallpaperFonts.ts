import { extractFontsFromContent } from '../../components/ImportFonts/extractFontsFromContent';
import { string_font_family } from '../typeAliases';
import { useWallpaper } from './useWallpaper';

interface WallpaperFonts {
    /**
     * The main font of the wallpaper page
     */
    mainWallpaperFont: string_font_family;

    /**
     * All the fonts used on the wallpaper page
     */
    allWallpaperFonts: Set<string_font_family>;
}

/**
 * A function that returns a fonts of the current wallpaper
 */
export function useWallpaperFonts(): WallpaperFonts {
    const [{ content }] = useWallpaper();

    const allWallpaperFonts = extractFontsFromContent(content);
    const mainWallpaperFont = Array.from(allWallpaperFonts)[1] || Array.from(allWallpaperFonts)[0]!;

    return { allWallpaperFonts, mainWallpaperFont };
}
