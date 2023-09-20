import MonacoEditor from '@monaco-editor/react';
import { useCurrentWallpaper } from '../../utils/hooks/useCurrentWallpaper';
import { Modal } from '../Modal/00-Modal';
import { useCloseWallpaperModalHandler } from '../WallpaperLink/useCloseWallpaperModalHandler';
import styles from './EditContentModal.module.css';

/**
 * Renders the modal for exporting wallpaper page as code
 */
export function EditContentModal() {
    const [wallpaper, modifyWallpaper] = useCurrentWallpaper();

    return (
        <Modal title={'Edit the content'} isCloseable  onClose={useCloseWallpaperModalHandler()}>
            <MonacoEditor
                className={styles.editor}
                theme="vs-dark"
                language={'markdown'}
                options={{
                    wordWrap: 'on',
                }}
                defaultValue={wallpaper.content}
                onChange={(newContent) => {
                    if (typeof newContent !== 'string') {
                        return;
                    }
                    modifyWallpaper((modifiedWallpaper) => {
                        modifiedWallpaper.content = newContent;
                        modifiedWallpaper.saveStage = 'EDITED';
                        return modifiedWallpaper;
                    });
                }}
            />
        </Modal>
    );
}

/**
 * TODO: [🛴] Lazy-load the <MonacoEditor/>
 */
