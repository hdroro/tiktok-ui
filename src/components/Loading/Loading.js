import React from 'react';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('loading-container')}>
            <div className={cx('loading-spinner')}>
                <FontAwesomeIcon icon={faSpinner} className={cx('icon-spin')} />
            </div>
        </div>
    );
}

export default Loading;
