import { Outlet, type RouteObject } from 'react-router-dom';

import { ROUTE_PATH } from '@constants';
import { HomeClient } from '@pages';

/**
 *  Purchase page link for users
 */

const clientRoutes: RouteObject = {
   path: ROUTE_PATH.CLIENT_HOME,
   element: <Outlet />,
   children: [
      {
         index: true,
         element: <HomeClient />,
      },
   ],
};

export default clientRoutes;
