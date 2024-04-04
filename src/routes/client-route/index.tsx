import { Outlet, type RouteObject } from 'react-router-dom';

import { ROUTE_PATH } from '@constants';

const clientRoutes: RouteObject = {
   path: ROUTE_PATH.CLIENT_HOME,
   element: <Outlet />,
   children: [
      {
         index: true,
         element: <>Trang chủ người dùng</>,
      },
   ],
};

export default clientRoutes;
