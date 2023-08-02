import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import { Link } from 'react-router-dom';
import { AccountIcon, BackIcon, NotificationIcon, PrivacyIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Setting() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('back-icon')}>
                <BackIcon />
            </Link>
            <div className={cx('setting-sidebar')}>
                <div className={cx('setting-link-content')}>
                    <div className={cx('setting-item')}>
                        <div className={cx('manage-account')}>
                            <span className={cx('icon-container')}>
                                <AccountIcon />
                            </span>
                            <strong className={cx('setting-sidebar-text')}>Manage account</strong>
                        </div>
                    </div>

                    <div className={cx('setting-item')}>
                        <div className={cx('privacy')}>
                            <span className={cx('icon-container')}>
                                <PrivacyIcon />
                            </span>
                            <strong className={cx('setting-sidebar-text')}>Privacy</strong>
                        </div>
                    </div>
                    <div className={cx('setting-item')}>
                        <div className={cx('push')}>
                            <span className={cx('icon-container')}>
                                <NotificationIcon />
                            </span>
                            <strong className={cx('setting-sidebar-text')}>
                                Push notifications
                            </strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('setting-container')}>
                <div className={cx('setting-content')}>
                    <div className={cx('row-content0')}>
                        <div className={cx('manage-content')}>
                            <div className={cx('manage-account-title')}>Manage account </div>
                            <div className={cx('manage-account-item')}>
                                <div className={cx('account-control-text')}>Account control</div>
                                <div className={cx('delete-control-option')}>
                                    <div className={cx('delete-control-text')}>Delete account</div>
                                    <button className={cx('delete-btn')}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('row-content1')}>
                        <div className={cx('privacy-content')}>
                            <div className={cx('privacy-title')}>Privacy </div>
                            <div className={cx('privacy-item')}>
                                <div className={cx('privacy-text')}>Discoverability</div>
                                <div className={cx('privacy-option')}>
                                    <div className={cx('privacy-account-text')}>
                                        Private account
                                        <span className={cx('private-account-span')}>
                                            With a private account, only users you approve can
                                            follow you and watch your videos. Your existing
                                            followers won't be affected.
                                        </span>
                                    </div>
                                    <button className={cx('btn-switch')}>
                                        <div className={cx('switch-wrapper')}>
                                            <span className={cx('switch-icon')}></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('data-item')}>
                                <div className={cx('data-text')}>Data</div>
                                <div className={cx('privacy-option')}>
                                    <div className={cx('download-data-text')}>
                                        Download your data
                                        <span className={cx('private-account-span')}>
                                            Get a copy of your TikTok data
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('row-content2')}>
                        <div className={cx('notifications-content')}>
                            <div className={cx('notifications-title')}>Push notifications </div>
                            <div className={cx('notifications-item')}>
                                <div className={cx('notifications-text')}>
                                    Desktop notifications
                                </div>
                                <div className={cx('notifications-option')}>
                                    <div className={cx('notifications-account-text')}>
                                        Allow in browser
                                        <span className={cx('private-account-span')}>
                                            Stay on top of notifications for likes, comments, the
                                            latest videos, and more on desktop. You can turn them
                                            off anytime.
                                        </span>
                                    </div>
                                    <button className={cx('btn-switch')}>
                                        <div className={cx('switch-wrapper')}>
                                            <span className={cx('switch-icon')}></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className={cx('preferences-item')}>
                                <div className={cx('preferences-title')}>Your preferences</div>
                                <div className={cx('preferences-text')}>
                                    Your preferences will be synced automatically to the TikTok app.
                                </div>
                                <div className={cx('interactions-title')}>Interactions</div>
                                <div className={cx('interactions-text')}>
                                    Likes, comments, new followers, mentions and tags
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Setting;
