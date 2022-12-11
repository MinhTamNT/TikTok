import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Accountitem from '~/Compontens/Accountitem/index';
import { Wrapper as PropperWrapper } from '~/Compontens/Propper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
const cx = classNames.bind(styles);
function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    //useRef
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    const handleClear = () => {
        setSearchText('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handlerHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <Accountitem />
                        <Accountitem />
                        <Accountitem />
                        <Accountitem />
                        <Accountitem />
                    </PropperWrapper>
                </div>
            )}
            onClickOutside={handlerHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchText}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchText(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchText && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}
export default Search;
