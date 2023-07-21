import classNames from 'classnames/bind';
import styles from './Message.module.scss';
import { BackIcon, MessengerSettingIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Message() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('back-icon')}>
                <BackIcon />
            </div>
            <div className={cx('messenger-user')}>
                <div className={cx('messenges')}>
                    <h1 className={cx('messenges-title')}>Messages</h1>
                    <div className={cx('messenges-setting')}>
                        <MessengerSettingIcon />
                    </div>
                </div>
                <div className={cx('users')}>No messages yet</div>
            </div>

            <div className={cx('messenger-content')}></div>
        </div>
    );
}

export default Message;
