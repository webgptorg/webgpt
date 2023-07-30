import Image from 'next/image';
import { useRouter } from 'next/router';
import { classNames } from '../../utils/classNames';
import { useLikedStatusOfCurrentWallpaper } from '../../utils/hooks/useLikedStatusOfCurrentWallpaper';
import styles from '../ControlPanel/ControlPanel.module.css';
import { WallpaperLink } from '../WallpaperLink/WallpaperLink';

/**
 * @@@
 */
export function ControlPanelLikeButtons() {
    const router = useRouter();
    const [likedStatus, setLikedStatus] = useLikedStatusOfCurrentWallpaper();

    return (
        <>
            {/* <div style={{ color: '#b11919' }}>{wallpaperId}</div> */}
            {['LOVE', 'LIKE'].includes(likedStatus) && (
                <WallpaperLink
                    // TODO: !!! Make some call-to-action> href={'mailto:me@pavolhejny.com'}
                    className={classNames(styles.button, styles.callToAction)}
                    modal="export"
                    mode="NORMAL"
                    /* Note: Keeping prefetch because we want to be this as-fast-as-possible */
                >
                    Get the web
                </WallpaperLink>
            )}

            <button
                // TODO: !!! Make some call-to-action> href={'mailto:me@pavolhejny.com'}

                className={classNames(/*'button',*/ styles.button)}
                title="I love this web!"
                data-active={likedStatus === 'LOVE'}
                onClick={() =>
                    void setLikedStatus(
                        likedStatus !== 'LOVE' ? 'LOVE' : 'NONE' /* <- TODO: [6] Make some toggle set wrapper */,
                    )
                }
            >
                <Image alt="❤" src="/icons/openmoji/2764.svg" width={40} height={40} /* <-[🧥] */ />
                {/* <MarkdownContent content="❤" isUsingOpenmoji /> */}
            </button>

            <button
                // TODO: !!! Also listen on double-click on mobile
                className={classNames(/*'button',*/ styles.button)}
                title="I like this web"
                data-active={likedStatus === 'LIKE'}
                onClick={() =>
                    void setLikedStatus(
                        likedStatus !== 'LIKE' ? 'LIKE' : 'NONE' /* <- TODO: [6] Make some toggle set wrapper */,
                    )
                }
            >
                <Image alt="👍" src="/icons/openmoji/1F44D.svg" width={40} height={40} /* <-[🧥] */ />
                {/* <MarkdownContent content="👍" isUsingOpenmoji /> */}
            </button>
            <button
                className={classNames(/*'button',*/ styles.button)}
                title="I do not know"
                data-active={likedStatus === 'NEUTRAL'}
                onClick={() =>
                    void setLikedStatus(
                        likedStatus !== 'NEUTRAL' ? 'NEUTRAL' : 'NONE' /* <- TODO: [6] Make some toggle set wrapper */,
                    )
                }
            >
                <Image alt="😐" src="/icons/openmoji/1F610.svg" width={40} height={40} /* <-[🧥] */ />
                {/* <MarkdownContent content="😐" isUsingOpenmoji /> */}
            </button>
            <button
                className={classNames(/*'button',*/ styles.button)}
                title="I dislike this web"
                data-active={likedStatus === 'DISLIKE'}
                onClick={() =>
                    void setLikedStatus(
                        likedStatus !== 'DISLIKE' ? 'DISLIKE' : 'NONE' /* <- TODO: [6] Make some toggle set wrapper */,
                    )
                }
            >
                <Image alt="👎" src="/icons/openmoji/1F44E.svg" width={40} height={40} /* <-[🧥] */ />
                {/* <MarkdownContent content="👎" isUsingOpenmoji /> */}
            </button>
        </>
    );
}
