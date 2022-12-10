import { useState, forwardRef } from 'react';
import images from '~/assets/image/index';
import styles from './image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ className, src, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handlerError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            {...props}
            onError={handlerError}
        />
    );
});

export default Image;
