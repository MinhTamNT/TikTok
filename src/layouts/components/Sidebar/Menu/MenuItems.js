import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);
function MenuItems({ title, to, icon, activeicons }) {
    return (
        <NavLink className={(nav) => cx('menu-items', { active: nav.isActive })} to={to}>
            <span className={cx('menu-icon')}> {icon}</span>
            <span className={cx('active-icon')}> {activeicons}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}
MenuItems.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeicons: PropTypes.node,
};
export default MenuItems;
