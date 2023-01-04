import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Accountitem from '~/Compontens/Accountitem/index';
import * as searchServices from '~/Services/searchServices';
import { Wrapper as PropperWrapper } from '~/Compontens/Propper';
import useDebounce from '~/hooks/useDebounce';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounceed = useDebounce(searchText, 500);
    //useRef
    const inputRef = useRef();
    //h
    useEffect(() => {
        if (!debounceed.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounceed);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounceed]);
    const handleClear = () => {
        setSearchText('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handlerHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValues = e.target.value;
        if (!searchValues.startsWith(' ')) {
            setSearchText(searchValues);
        }
    };
    return (
        // Using wrap <span> or <div> tag around the reference element sloves this by creating a new parentNode context
        // That is warring for the Tippy ReactJs
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PropperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => (
                                <Accountitem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchText && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}
export default Search;
