import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AccountItem({ data, isSuggested }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PropperWrapper>
                    {isSuggested && <AccountPreview data={data} isSuggested={isSuggested} />}
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
                <Link to={`/@${data.nickname}`} className={cx('account-item')}>
                    <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            {data.tick && (
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                            )}
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
    isSuggested: PropTypes.bool,
};

export default AccountItem;
