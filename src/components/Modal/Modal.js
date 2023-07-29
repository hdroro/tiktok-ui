import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const Modal = ({ isShowing, hide }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div
                      className={cx('modal-wrapper')}
                      aria-modal
                      aria-hidden
                      tabIndex={-1}
                      role="dialog"
                  >
                      <div className={cx('modal')}>
                          <div className={cx('modal-header')}>
                              <h2 className={cx('header-title')}>Message settings</h2>
                              <button
                                  type="button"
                                  className={cx('modal-close-button')}
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={hide}
                              >
                                  <span aria-hidden="true">×</span>
                              </button>
                          </div>
                          <div className={cx('modal-content')}>
                              <div className={cx('wrapper')}>
                                  <h3 className={cx('header-setting-wonder')}>
                                      Who can send you direct messages
                                  </h3>
                                  <span className={cx('messages-setting')}>
                                      With any option, you can receive messages from users that
                                      you've sent messages to. Friends are your followers that you
                                      follow back.
                                  </span>
                                  <div className={cx('group-btn-radio')}>
                                      <div className={cx('friends-option')}>
                                          <label className={cx('label-container')}>
                                              <input type="radio" className={cx('input-radio')} />
                                              <div className={cx('radio_friends-option')}></div>
                                              <span className={cx('radio-options')}>Friends</span>
                                          </label>
                                      </div>

                                      <div className={cx('no-one-option')}>
                                          <label className={cx('label-container')}>
                                              <input type="radio" className={cx('input-radio')} />
                                              <div className={cx('radio_no-one-option')}></div>
                                              <span className={cx('radio-options')}>Friends</span>
                                          </label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className={cx('modal-footer')}>
                              <div className={cx('footer-container')}>
                                  <Button primary className={cx('btn-save')}>
                                      Save
                                  </Button>
                                  <Button normal className={cx('btn-cancel')}>
                                      Cancel
                                  </Button>
                              </div>
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;

export default Modal;
