import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { useCurrentWallpaper } from '../../utils/hooks/useCurrentWallpaper';
import { useLastSavedWallpaper } from '../../utils/hooks/useLastSavedWallpaper';
import { ColorInput } from '../ColorPreview/ColorInput/ColorInput';
import { ColorPreview } from '../ColorPreview/ColorPreview';
import { WallpaperLink } from '../WallpaperLink/WallpaperLink';
import styles from './ColorsPanel.module.css';

/**
 * Renders the colors panel component
 * 
 * @deprecated [📿] <ColorsPanel /> and its components are not used anymore
 */
export function ColorsPanel() {
    const [wallpaper, modifyWallpaper] = useCurrentWallpaper();
    const lastSavedWallpaper = useLastSavedWallpaper();

    // TODO: Maybe make hook useTemporaryToggle - simmilar to hook useClickOutside
    const [isOpen, setOpen] = useState(false);
    const controlsRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const timeout = setTimeout(() => {
            setOpen(false);
        }, 5000);

        /**
         * Handles the click outside of the ColorsPanel component
         *
         * @param {MouseEvent} event - The click event.
         */
        const outclickHandler = (event: MouseEvent) => {
            if (!(event.target instanceof HTMLElement)) {
                return;
            }
            if (controlsRef.current && controlsRef.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };
        window.document.addEventListener('click', outclickHandler);

        return () => {
            clearTimeout(timeout);
            window.document.removeEventListener('click', outclickHandler);
        };
    }, [isOpen, setOpen]);

    return (
        <div
            className={classNames(
                'webgpt-controls' /* <- TODO: [🧠] ACRY remove webgpt-controls class OR figure out how to propperly and semantically mark controls */,
                styles.ColorsPanel,
                isOpen && styles.open,
            )}
            ref={controlsRef}
            onClickCapture={(event) => {
                if (isOpen) {
                    return;
                }

                event.stopPropagation();
                setOpen(true);
            }}
            onPointerMove={() => setOpen(true)}
        >
            <div className={classNames(styles.colorPickerWrapper)} style={{ zIndex: 100 }}>
                <WallpaperLink modal="colors" prefetch={false /* <- Note: Because this is a bit rare options */}>
                    <ColorPreview className={styles.colorPicker} color={'HUE_CIRCLE'} />
                </WallpaperLink>
            </div>

            {wallpaper.colorStats.palette.map((color, i) => (
                <div key={i} className={styles.colorPickerWrapper} style={{ zIndex: 100 - 1 - i }}>
                    <ColorInput
                        className={styles.colorPicker}
                        value={color.value}
                        onChange={(newColor) => {
                            modifyWallpaper((modifiedWallpaper) => {
                                modifiedWallpaper.colorStats.palette[i]!.value = newColor;
                                modifiedWallpaper.saveStage = 'EDITED';
                                return modifiedWallpaper;
                            });
                        }}
                        presetColors={
                            // TODO: Optimize, do just once not for every color:
                            lastSavedWallpaper.colorStats.palette.map((color) => ({
                                title: color.note,
                                color: color.value.toHex(),
                            }))
                        }
                    />
                </div>
            ))}
        </div>
    );
}

/**
 * TODO: Change this to <ColorsAndFontsPanel/> OR [🧠] allow to change fonts here [👩‍🦰]
 * TODO: Maybe allow to close the colors
 */
