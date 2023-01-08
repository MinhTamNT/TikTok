import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';
const cx = classNames.bind(styles);
function SuggestAccounts({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
SuggestAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
};
export default SuggestAccounts;
