import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    <AccountPreview />
                </PropperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                offset={[-20, 0]}
                interactive
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/d1b57489fe0fbc9f69743de695e4f89c~c5_100x100.jpeg?x-expires=1688947200&x-signature=hWpRWbrWYruZQ9rsSTxVpRynHJk%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>hongdiem</strong>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Hồng Diễm</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
