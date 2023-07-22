import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { MusicIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('new-content')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b2769441f7afc4dd6e44c8d50c388cd8~c5_100x100.jpeg?x-expires=1690210800&x-signature=X9q%2Fz74fCKsvf8VOYjV5meegb7M%3D"
                    alt=""
                />
                <div className={cx('user-content')}>
                    <div className={cx('name-content')}>
                        <span className={cx('nickname')}>
                            vienvibi_899{' '}
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </span>
                        <span className={cx('fullname')}>Viên Vibi</span>
                        <Button outline className={cx('btn-follow')}>
                            Follow
                        </Button>
                    </div>

                    <div className={cx('title-news')}>Tiktok năm 1960-1970 kiểu:</div>
                    <div className={cx('name-music')}>
                        <MusicIcon /> nhạc nền - Viên Vibi
                    </div>
                    <div className={cx('video')}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mhUEVZnqq6yF2z99ZCDlRZQbQks3HZNdyQ&usqp=CAU"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
