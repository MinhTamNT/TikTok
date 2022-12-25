import routesConfig from '~/config/routes';
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
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.Profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];
// Public Routes when u have account
const PrivatecRoutes = [];
export { publicRoutes, PrivatecRoutes };
