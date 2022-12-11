import styles from './Accountitem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/Compontens/images/index';
const cx = classNames.bind(styles);
function Accountitem() {
    return (
        <div className={cx('Wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1665757201241090~c5_300x300.webp?x-expires=1669557600&x-signature=0IjE%2Fy68dGn92475jvwMP1nEuX0%3D"
                alt=""
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Minh Tam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Marshall1502</span>
            </div>
        </div>
    );
}

export default Accountitem;
