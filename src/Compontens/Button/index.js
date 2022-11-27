import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    className,
    disabled = false,
    children,
    text = false,
    rounded = false,
    outline = false,
    Menuitem = false,
    LeftIcon,
    rightIcon,
    small = false,
    large = false,
    primary = false,
    onClick,
    ...passProp
}) {
    let Comp = 'button';
    const prop = {
        onClick,
        ...passProp,
    };

    //Remove disabled
    if (disabled) {
        Object.keys(prop).forEach((key) => {
            if (key.startsWith('on') && typeof prop[key] === 'function') {
                delete prop[key];
            }
        });
    }
    if (to) {
        prop.to = to;
        Comp = Link;
    } else if (href) {
        prop.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        rounded,
        disabled,
        Menuitem,
    });
    return (
        <Comp className={classes} {...prop}>
            {LeftIcon && <span className={cx('Icon')}>{LeftIcon}</span>}
            <span className={cx('tittle')}>{children}</span>
            {rightIcon && <span className={cx('Icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
