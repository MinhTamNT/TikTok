import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeIconActive,
    LiveActiveIcon,
    LiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
} from '~/Compontens/icons/index';
import config from '~/config';
import Menu, { MenuItems } from './Menu';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For Your"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeicons={<HomeIconActive />}
                />
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeicons={<UserGroupActiveIcon />}
                />
                <MenuItems title="Live" to={config.routes.Live} icon={<LiveIcon />} activeicons={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default SideBar;
