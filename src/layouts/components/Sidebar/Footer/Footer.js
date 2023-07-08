import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('group')}>
                <a href="/about" className={cx('group-item')}>
                    About
                </a>
                <a href="/newsroom" className={cx('group-item')}>
                    Newsroom
                </a>
                <a href="/contact" className={cx('group-item')}>
                    Contact
                </a>
                <a href="/careers" className={cx('group-item')}>
                    Careers
                </a>
                <a href="/byteDance" className={cx('group-item')}>
                    ByteDance
                </a>
            </div>

            <div className={cx('group')}>
                <a href="/tiktokForGood" className={cx('group-item')}>
                    TikTok for Good
                </a>
                <a href="/advertise" className={cx('group-item')}>
                    Advertise
                </a>
                <a href="/developers" className={cx('group-item')}>
                    Developers
                </a>
                <a href="/transparency" className={cx('group-item')}>
                    Transparency
                </a>
                <a href="/rewards" className={cx('group-item')}>
                    <br />
                    TikTok Rewards
                </a>
                <a href="/embeds" className={cx('group-item')}>
                    TikTok Embeds
                </a>
            </div>

            <div className={cx('group')}>
                <a href="/help" className={cx('group-item')}>
                    Help
                </a>
                <a href="/safety" className={cx('group-item')}>
                    Safety
                </a>
                <a href="/terms" className={cx('group-item')}>
                    Terms
                </a>
                <a href="/privacy" className={cx('group-item')}>
                    Privacy
                </a>
                <a href="/creater" className={cx('group-item')}>
                    Creator Portal
                </a>
                <a href="/guidelines" className={cx('group-item')}>
                    <br />
                    Community Guidelines
                </a>
            </div>
            <span className={cx('copy-right')}>© 2023 TikTok</span>
        </div>
    );
}

export default Footer;
