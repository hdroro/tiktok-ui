import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { BackIcon, EmojiIcon, MessengerSettingIcon, MoreIconMessage } from '~/components/Icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useModal } from '~/hooks';
import Modal from '~/components/Modal/Modal';

const cx = classNames.bind(styles);

function Message() {
    const { isShowing, toggle } = useModal();
    return (
        <div className={cx('wrapper')}>
            <Link to={'/'} className={cx('back-icon')}>
                <BackIcon />
            </Link>
            <div className={cx('messenger-user')}>
                <div className={cx('messenges')}>
                    <h1 className={cx('messenges-title')}>Messages</h1>
                    <div className={cx('messenges-setting')} onClick={toggle}>
                        <MessengerSettingIcon />
                    </div>
                    <Modal isShowing={isShowing} hide={toggle} />
                </div>
                {/* <div className={cx('users')}>No message</div> */}

                <div>
                    <div className={cx('message-another')}>
                        <img
                            className={cx('avatar')}
                            src="https://files.fullstack.edu.vn/f8-tiktok/users/4904/63e351c39f2af.jpg"
                            alt=""
                        />
                        <div className={cx('info-user')}>
                            <div className={cx('fullname')}>choose</div>
                            <div className={cx('curTime')}>10:24 PM</div>
                        </div>
                        <MoreIconMessage className={cx('more-icon')} />
                    </div>
                    <div className={cx('message-another')}>
                        <img
                            className={cx('avatar')}
                            src="https://files.fullstack.edu.vn/f8-tiktok/users/4904/63e351c39f2af.jpg"
                            alt=""
                        />
                        <div className={cx('info-user')}>
                            <div className={cx('fullname')}>choose</div>
                            <div className={cx('curTime')}>10:24 PM</div>
                        </div>

                        <MoreIconMessage className={cx('more-icon')} />
                    </div>
                </div>
            </div>

            <div className={cx('messenger-content')}>
                <div className={cx('chat-header')}>
                    <div className={cx('header-content')}>
                        <img
                            className={cx('avatar-header')}
                            src="https://files.fullstack.edu.vn/f8-tiktok/users/4904/63e351c39f2af.jpg"
                            alt=""
                        />
                        <div className={cx('info-user')}>
                            <div className={cx('fullname-header')}>choose</div>
                            <div className={cx('nickname-header')}>@kagheen</div>
                        </div>
                    </div>
                </div>
                <div className={cx('chat-main')}></div>
                <div className={cx('chat-send-bottom')}>
                    <div className={cx('message-input-area')}>
                        <input className={cx('input-message')} placeholder="Send a message...." />
                        <Tippy content="Click to add emojis" placement="top">
                            <div className={cx('emoji-item')}>
                                <EmojiIcon className={cx('emoji-icon')} />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;
