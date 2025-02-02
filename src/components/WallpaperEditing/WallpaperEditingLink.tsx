import Image from 'next/image';
import { classNames } from '../../utils/classNames';
import styles from '../ControlPanel/ControlPanel.module.css';
import { Hint } from '../Hint/Hint';
import { WallpaperLink } from '../WallpaperLink/WallpaperLink';

/**
 * Renders a link for switching to the wallpaper editing mode.
 *
 * @return {JSX.Element} The rendered JSX element.
 */
export function WallpaperEditingLink() {
    return (
        <div
            // Note: It is intended to have two divs embedded in each other
            className={classNames('webgpt-controls', styles.ControlPanel)}
        >
            <div className={styles.group}>
                <Hint id="control-edit-mode" title="Show controls" reapearCount={1}>
                    <WallpaperLink role="OWNER" className={classNames(/*'button',*/ styles.button)}>
                        <Image alt="✏" src="/icons/openmoji/270F.black.svg" width={40} height={40} /* <-[🧥] */ />
                    </WallpaperLink>
                </Hint>
            </div>
        </div>
    );
}

/**
 * TODO: !! This is equivalent to <ControlPanel/> - rename it accordingly
 */
