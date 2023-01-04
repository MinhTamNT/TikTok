import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/image/index';
import styles from './image.module.scss';
import classNames from 'classnames';
const Image = forwardRef(({ className, alt, src, fallback: customFallback = images.noImage, ...props }, ref) => {
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
Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
