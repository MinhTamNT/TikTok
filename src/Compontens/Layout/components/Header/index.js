import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBox,
    faCircleXmark,
    faCoins,
    faEarthAmerica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faPlus,
    faQuestion,
    faSignOut,
    faSpinner,
    faToggleOn,
    faTv,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PropperWrapper } from '~/Compontens/Propper';
import Button from '~/Compontens/Button/index';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Accountitem from '~/Compontens/Accountitem/index';
import Menu from '~/Compontens/Propper/Menu';
import { faUber } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    types: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    types: 'Language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedbackandhelp',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faToggleOn} />,
        title: 'Dark Mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setInterval(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    // Hanle Logic
    const handleChange = (MENUTEMS) => {
        switch (MENUTEMS.types) {
            case 'Language':
                break;
            default:
                break;
        }
    };
    const USERITEM = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/ViewProfile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/GetCoins',
        },
        {
            icon: <FontAwesomeIcon icon={faTv} />,
            title: 'Live Studio',
            to: '/LiveStudio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/Logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                {/* //Sreach */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
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
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* Handle Logic Login */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text LeftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp Thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faBox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text LeftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary className={cx('custom-login')}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? USERITEM : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <img
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/90de991fdbcb5210475a2340767f383f~c5_100x100.jpeg?x-expires=1669942800&x-signature=xKVPILxL99u9K8TJKvG4OLTCZSo%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van a"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
