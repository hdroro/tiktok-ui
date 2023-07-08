import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import Button from '~/components/Button/Button';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            {currentUser ? (
                <SuggestedAccounts label="Suggested Accounts" isSuggested />
            ) : (
                <div className={cx('subscribe-wrapper')}>
                    <p className={cx('subscribe')}>
                        Log in to follow creators, like videos, and view comments.
                    </p>
                    <Button outline large>
                        Login
                    </Button>
                </div>
            )}
            {currentUser && <SuggestedAccounts label="Following Accounts" />}
            <Footer />
        </aside>
    );
}

export default Sidebar;
