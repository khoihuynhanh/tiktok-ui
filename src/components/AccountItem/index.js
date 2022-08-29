import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/897ebe02012edc47493b9cbd2d4a4d5a~c5_300x300.webp?x-expires=1660978800&x-signature=%2BBI8jbOlIN%2BEkgKh8BjVZNsV0uc%3D"
                alt="Name"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Full Name</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>fullname</span>
            </div>
        </div>
    );
}

export default AccountItem;
