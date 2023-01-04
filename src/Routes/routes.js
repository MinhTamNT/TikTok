import config from '~/config/index';
//Layouts
import HeaderOnly from '~/layouts/HeaderOnly/index';
// Page
import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';

// Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.Profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];
// Public Routes when u have account
const PrivatecRoutes = [];
export { publicRoutes, PrivatecRoutes };
