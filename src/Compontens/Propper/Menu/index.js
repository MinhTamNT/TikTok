import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PropperWrapper } from '~/Compontens/Propper';
import PropTypes from 'prop-types';
///
import styles from './Menu.module.scss';
import MenuItems from './MenuItems';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    console.log(current);
    const renderImtem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            offset={[20, 8]}
            delay={[0, 700]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                    <PropperWrapper className={cx('menu-propper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}> {renderImtem()}</div>
                    </PropperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.splice(0, 1))}
        >
            {children}
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    hideOnClick: PropTypes.bool,
};
export default Menu;
