import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeIconActive,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/Compontens/icons/index';
import SuggestAccount from '~/Compontens/SuggestAccount';
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
            <SuggestAccount lable="Tài khoản được đề xuất" />
            <SuggestAccount lable="TàI khoản theo dõi" />
        </aside>
    );
}

export default SideBar;
