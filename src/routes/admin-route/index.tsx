import { Outlet, type RouteObject } from 'react-router-dom';

import { ROUTE_PATH } from '@constants';

const adminRoutes: RouteObject = {
   path: ROUTE_PATH.ADMIN_HOME,
   element: <Outlet />,
   children: [
      {
         index: true,
         element: <>Trang chủ quản trị viên</>,
      },
   ],
};

export default adminRoutes;
