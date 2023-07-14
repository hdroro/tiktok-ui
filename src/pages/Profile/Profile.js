import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Button from '~/components/Button/Button';
import * as searchServices from '~/services/searchService';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ShareIcon, ActionsIcon, UnfollowIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

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
            {account[0] && (
                <div className={cx('user-info')}>
                    <div className={cx('container-info')}>
                        <img src={account[0].avatar} alt="" className={cx('avatar')} />
                        <div className={cx('info-detail')}>
                            <div className={cx('nickname')}>
                                {account[0].nickname}{' '}
                                {account[0].tick && (
                                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
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
                                    <Button outline className={cx('message')}>
                                        Messages
                                    </Button>
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
                <button className={cx('share-btn')}>
                    <ShareIcon />
                </button>
                <button className={cx('actions-btn')}>
                    <ActionsIcon />
                </button>
            </div>
        </div>
    );
}

export default Profile;
