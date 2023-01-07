import config from '~/config/index';
//Layouts
import HeaderOnly from '~/layouts/HeaderOnly/index';
// Page
import Following from '~/Pages/Following';
import Home from '~/Pages/Home';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Live from '~/Pages/Live';
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
        path: config.routes.Live,
        component: Live,
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
