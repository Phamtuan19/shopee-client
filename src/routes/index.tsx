import { useRoutes, type RouteObject } from 'react-router-dom';

import clientRoutes from './client-route';
import adminRoutes from './admin-route';
import PublicRouter from './components/public-route';

import { ROUTE_PATH } from '@constants';
import SignIn from '@pages/sign-in';

const routes = (): RouteObject[] => {
   return [
      /**
       * Route Public
       * Route sign-in
       */
      {
         path: ROUTE_PATH.SIGN_IN,
         element: (
            <PublicRouter>
               <SignIn />
            </PublicRouter>
         ),
      },

      adminRoutes,
      clientRoutes,

      /**
       * Nod found route 404
       */
      {
         path: '*',
         element: <>404</>,
      },
   ];
};

export default function Routers() {
   return useRoutes(routes());
}
