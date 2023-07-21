import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const [btnState, setBtnState] = useState(false);
    const handleClick = () => {
        setBtnState(!btnState);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <div onClick={handleClick}>
                    {btnState ? (
                        <Button outline className={cx('follow-btn')}>
                            Unfollow
                        </Button>
                    ) : (
                        <Button primary className={cx('follow-btn')}>
                            Follow
                        </Button>
                    )}
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.full_name}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>{data.followings_count} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object,
};

export default AccountPreview;
