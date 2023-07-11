import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('border')}>
                    <input type="file" accept="video/*" className={cx('input-btn')} />
                    <div className={cx('content')}>
                        <img
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCA0MCAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS41MDAxIDI5SDMwLjVDMzUuNzQ2NyAyOSA0MCAyNC43NDY3IDQwIDE5LjVDNDAgMTQuNzExNSAzNi40NTcxIDEwLjc1MDQgMzEuODQ5NyAxMC4wOTUxQzMwLjkzNyA0LjM3Mjk3IDI1Ljk3OTIgMCAyMCAwQzEzLjM3MjYgMCA4IDUuMzcyNTggOCAxMkw4LjAwMDAxIDEyLjAxNDVDMy41MzgzMSAxMi4yNzMzIDAgMTUuOTczNCAwIDIwLjVDMCAyNS4xOTQ0IDMuODA1NTggMjkgOC41IDI5SDE4LjUwMDFWMTcuMTIxM0wxNS45MTQzIDE5LjcwNzFDMTUuNzE5MSAxOS45MDI0IDE1LjQwMjUgMTkuOTAyNCAxNS4yMDcyIDE5LjcwNzFMMTMuNzkzIDE4LjI5MjlDMTMuNTk3NyAxOC4wOTc2IDEzLjU5NzcgMTcuNzgxIDEzLjc5MyAxNy41ODU4TDE4LjkzOTUgMTIuNDM5M0MxOS41MjUyIDExLjg1MzYgMjAuNDc1IDExLjg1MzYgMjEuMDYwOCAxMi40MzkzTDI2LjIwNzIgMTcuNTg1OEMyNi40MDI1IDE3Ljc4MSAyNi40MDI1IDE4LjA5NzYgMjYuMjA3MiAxOC4yOTI5TDI0Ljc5MyAxOS43MDcxQzI0LjU5NzcgMTkuOTAyNCAyNC4yODEyIDE5LjkwMjQgMjQuMDg1OSAxOS43MDcxTDIxLjUwMDEgMTcuMTIxM1YyOVoiIGZpbGw9IiMxNjE4MjMiIGZpbGwtb3BhY2l0eT0iMC4zNCIvPgo8L3N2Zz4K"
                            alt=""
                        />
                        <h3 className={cx('select-video')}>Select video to upload</h3>
                        <div>
                            <span className={cx('another-guide')}>Or drag and drop a file</span>
                        </div>
                        <div className={cx('text-sub')}>
                            <span>
                                Long videos can be split into multiple parts to get more exposure
                            </span>
                        </div>
                        <div className={cx('text-video-info')}>
                            <div>MP4 or WebM</div>
                            <div>720x1280 resolution or higher</div>
                            <div>Up to 30 minutes</div>
                            <div>Less than 2 GB</div>
                        </div>
                        <div>
                            <Button large primary className={cx('btn-select')}>
                                Select file
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
