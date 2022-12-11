//Layouts
import { HeaderOnly } from '~/Compontens/Layout';

// Page
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/@:nickname',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];
// Public Routes when u have account
const PrivatecRoutes = [];
export { publicRoutes, PrivatecRoutes };
