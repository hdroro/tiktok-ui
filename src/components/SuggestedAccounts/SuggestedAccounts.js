import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

import { useState, useEffect } from 'react';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label, isSuggested }) {
    const [suggestAccounts, setSuggestAccounts] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.search('z');
            setSuggestAccounts(result);
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggestAccounts.map((result) => (
                <AccountItem key={result.id} data={result} isSuggested={isSuggested} />
            ))}
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    isSuggested: PropTypes.bool,
};

export default SuggestedAccounts;
