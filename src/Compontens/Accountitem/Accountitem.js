import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '~/Compontens/images/Image';
import styles from './Accountitem.module.scss';
const cx = classNames.bind(styles);
function Accountitem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('Wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
Accountitem.prototypes = {
    data: PropTypes.object.isRequired,
};
export default Accountitem;
