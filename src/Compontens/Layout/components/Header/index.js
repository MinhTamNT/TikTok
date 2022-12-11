import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarthAmerica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPlus,
    faQuestion,
    faSignOut,
    faToggleOn,
    faTv,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Search from '../Search';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/Compontens/Button/index';
import styles from './Header.module.scss';
import images from '~/assets/image';
import Image from '~/Compontens/images/index';
import Menu from '~/Compontens/Propper/Menu';
import { MessgaeIcons, BoxMessage } from '~/Compontens/icons';
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
    const currentUser = true;
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
                <Search />

                {/* Handle Logic Login */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text LeftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessgaeIcons />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Hộp Thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <BoxMessage />
                                    <span className={cx('badge')}>12</span>
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
                            <Image
                                src=""
                                className={cx('user-avatar')}
                                alt="Nguyen Van a"
                                fallback="https://i.pinimg.com/736x/49/27/aa/4927aa285cd5c1de43e34da92d520b57.jpg"
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
