import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '~/components/Button/Button';
import * as searchServices from '~/services/searchService';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {
    ShareIcon,
    ActionsIcon,
    UnfollowIcon,
    EmbedIcon,
    FacebookIcon,
    WhatsAppIcon,
    TwitterIcon,
    CopyLinkIcon,
    SendMessageIcon,
    BlockIcon,
    ReportIcon,
    UnlockIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu/Menu';

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

const MENU_ITEMS_ACTIONS = [
    {
        icon: <SendMessageIcon />,
        title: 'Send message',
        to: '/messages',
    },
    {
        icon: <ReportIcon />,
        title: 'Report',
    },
    {
        icon: <BlockIcon />,
        title: 'Block',
    },
];

function Profile() {
    const { nickname } = useParams();

    const [account, setAccounts] = useState([]);
    const [showFollowButton, setShowFollowButton] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.search(nickname.slice(1));
            setAccounts(result);
            setShowFollowButton(false);
        };

        fetchApi();
    }, [nickname]);

    const handleUnfollowClick = () => {
        setShowFollowButton(true);
    };

    const handleFollowClick = () => {
        setShowFollowButton(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-user-info')}>
                {account[0] && (
                    <div className={cx('user-info')}>
                        <div className={cx('container-info')}>
                            <img src={account[0].avatar} alt="" className={cx('avatar')} />
                            <div className={cx('info-detail')}>
                                <div className={cx('nickname')}>
                                    {account[0].nickname}{' '}
                                    {account[0].tick && (
                                        <FontAwesomeIcon
                                            className={cx('check')}
                                            icon={faCheckCircle}
                                        />
                                    )}
                                </div>

                                <div className={cx('name')}>{account[0].full_name}</div>
                                {showFollowButton ? (
                                    <Button
                                        primary
                                        className={cx('follow-btn')}
                                        onClick={handleFollowClick}
                                    >
                                        Follow
                                    </Button>
                                ) : (
                                    <div className={cx('unfollow-btn')}>
                                        <a href="/messages">
                                            <Button outline className={cx('message')}>
                                                Messages
                                            </Button>
                                        </a>
                                        <Tippy content="Unfollow" placement="bottom">
                                            <div
                                                className={cx('unfollow-icon')}
                                                onClick={handleUnfollowClick}
                                            >
                                                <UnfollowIcon />
                                            </div>
                                        </Tippy>
                                    </div>
                                )}
                            </div>
                        </div>
                        <h3 className={cx('count-info')}>
                            <div className={cx('following')}>
                                {account[0].followings_count}{' '}
                                <span className={cx('count-title')}> Following</span>
                            </div>
                            <div className={cx('followers')}>
                                {account[0].followers_count}{' '}
                                <span className={cx('count-title')}> Followers</span>
                            </div>

                            <div className={cx('likes')}>
                                {account[0].likes_count}{' '}
                                <span className={cx('count-title')}> Likes</span>
                            </div>
                        </h3>
                        <h2 className={cx('user-bio')}>{account[0].bio || 'No bio yet.'}</h2>
                    </div>
                )}

                <div className={cx('actions')}>
                    <Menu items={MENU_ITEMS_SHARE}>
                        <button className={cx('share-btn')}>
                            <ShareIcon />
                        </button>
                    </Menu>
                    <Menu items={MENU_ITEMS_ACTIONS}>
                        <button className={cx('actions-btn')}>
                            <ActionsIcon />
                        </button>
                    </Menu>
                </div>
            </div>

            <div className={cx('wrapper-interaction')}>
                <div className={cx('menu-interaction')}>
                    <p className={cx('videos-tab')}>
                        <span>Videos</span>
                    </p>
                    <p className={cx('liked-tabs')}>
                        <UnlockIcon />
                        <span className={cx('liked-span')}>Liked</span>
                    </p>
                    <div className={cx('line-tab')}></div>
                </div>
            </div>
            <div className={cx('menu-videos')}>
                <div className={cx('video')}>
                    <img
                        className={cx('video-show')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/42435dbb7bca7c6599a7a3b127d2112d~c5_100x100.jpeg?x-expires=1689955200&x-signature=JuuCRHQvC8mPqxcrP0EeW9esFrc%3D"
                        alt=""
                    />
                    <span className={cx('video-title')}>
                        thế rốt cuộc mối quan hệ của chúng ta là gì? #bimatnoigoctoi #fyp #viral
                    </span>
                </div>
                <div className={cx('video')}>
                    <img
                        className={cx('video-show')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/42435dbb7bca7c6599a7a3b127d2112d~c5_100x100.jpeg?x-expires=1689955200&x-signature=JuuCRHQvC8mPqxcrP0EeW9esFrc%3D"
                        alt=""
                    />
                    <span className={cx('video-title')}>
                        thế rốt cuộc mối quan hệ của chúng ta là gì? #bimatnoigoctoi #fyp #viral
                    </span>
                </div>
                <div className={cx('video')}>
                    <img
                        className={cx('video-show')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/42435dbb7bca7c6599a7a3b127d2112d~c5_100x100.jpeg?x-expires=1689955200&x-signature=JuuCRHQvC8mPqxcrP0EeW9esFrc%3D"
                        alt=""
                    />
                    <span className={cx('video-title')}>
                        thế rốt cuộc mối quan hệ của chúng ta là gì? #bimatnoigoctoi #fyp #viral
                    </span>
                </div>
                <div className={cx('video')}>
                    <img
                        className={cx('video-show')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/42435dbb7bca7c6599a7a3b127d2112d~c5_100x100.jpeg?x-expires=1689955200&x-signature=JuuCRHQvC8mPqxcrP0EeW9esFrc%3D"
                        alt=""
                    />
                    <span className={cx('video-title')}>
                        thế rốt cuộc mối quan hệ của chúng ta là gì? #bimatnoigoctoi #fyp #viral
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
