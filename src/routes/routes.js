//Layouts
import config from '~/config';
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Message from '~/pages/Message';
import Setting from '~/pages/Setting/Setting';
import Coin from '~/pages/Coin/Coin';

//public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.messages, component: Message, layout: HeaderOnly },
    { path: config.routes.setting, component: Setting, layout: HeaderOnly },
    { path: config.routes.coin, component: Coin, layout: HeaderOnly },
];

//private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
