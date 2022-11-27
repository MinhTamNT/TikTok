import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PropperWrapper } from '~/Compontens/Propper';
import MenuItems from './MenuItems';
const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderImtem = () => {
        return items.map((item, index) => <MenuItems key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            delay={[0, 3000]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>{renderImtem()}</PropperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
