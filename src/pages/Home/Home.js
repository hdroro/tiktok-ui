import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import {
    CommentIcon,
    LikeIcon,
    MusicIcon,
    SaveIcon,
    ShareIconHome,
    EmbedIcon,
    FacebookIcon,
    WhatsAppIcon,
    TwitterIcon,
    CopyLinkIcon,
    LikedIcon,
    SavedIcon,
} from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS_SHARE = [
    {
        icon: <EmbedIcon />,
        title: 'Embed',
        to: '/embed',
    },
    {
        icon: <FacebookIcon />,
        title: 'Share to Facebook',
    },
    {
        icon: <WhatsAppIcon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <TwitterIcon />,
        title: 'Share to Twitter',
    },
    {
        icon: <CopyLinkIcon />,
        title: 'Copy link',
    },
];

function Home() {
    const [follow, setFollow] = useState(false);
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);

    const handleFollowing = () => {
        setFollow(!follow);
    };

    const handleLikeClick = () => {
        setLike(!like);
    };

    const handleSaveClick = () => {
        setSave(!save);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('new-content')}>
                <a href={`/@jajaja`}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-tiktok/users/4904/63e351c39f2af.jpg"
                        alt=""
                    />
                </a>
                <div className={cx('user-content')}>
                    <div className={cx('name-content')}>
                        <a href={`/@jajaja`} className={cx('nickname')}>
                            jajaja <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </a>
                        <a href={`/@jajaja`} className={cx('fullname')}>
                            xxzz ffia
                        </a>
                        {follow ? (
                            <Button normal className={cx('btn-follow')} onClick={handleFollowing}>
                                Following
                            </Button>
                        ) : (
                            <Button outline className={cx('btn-follow')} onClick={handleFollowing}>
                                Follow
                            </Button>
                        )}
                    </div>

                    <div className={cx('title-news')}>
                        “Cách duy nhất để kết thúc một mối tình đơn phương là tỏ tình.”#fyp
                    </div>
                    <div className={cx('name-music')}>
                        <MusicIcon /> nhạc nền - xxzz ffia
                    </div>
                    <div className={cx('video-container')}>
                        <div className={cx('video-music')}>
                            <img
                                className={cx('video-per')}
                                src="https://i.pinimg.com/564x/44/64/e9/4464e9a520d53b7242533bd2000389c5.jpg"
                                alt=""
                            />
                        </div>
                        <div className={cx('emoji-actions')}>
                            <button className={cx('action')}>
                                <span className={cx('like-icon')} onClick={handleLikeClick}>
                                    {like ? <LikedIcon /> : <LikeIcon />}
                                </span>
                                <strong className={cx('like-count')}>162.9K</strong>
                            </button>

                            <button className={cx('action')}>
                                <span className={cx('comment-icon')}>
                                    <CommentIcon />
                                </span>
                                <strong className={cx('comment-count')}>2.9K</strong>
                            </button>

                            <button className={cx('action')}>
                                <span className={cx('save-icon')} onClick={handleSaveClick}>
                                    {save ? <SavedIcon /> : <SaveIcon />}
                                </span>
                                <strong className={cx('save-count')}>3592</strong>
                            </button>

                            <button className={cx('action')}>
                                <Menu items={MENU_ITEMS_SHARE}>
                                    <span className={cx('share-icon')}>
                                        <ShareIconHome />
                                    </span>
                                </Menu>
                                <strong className={cx('share-count')}>3592</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
