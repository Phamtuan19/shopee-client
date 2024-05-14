import { Link } from 'react-router-dom';

import { MenuHeader } from './component/menu-header';
import { Card } from './component/card';
import { User } from './component/user';

import { LanguageSystem, LazyLoadingImage } from '@components';
import { ROUTE_PATH } from '@constants';

const LOGO = 'https://5sfashion.vn/storage/upload/images/logo/logo.png';

const data = [
   {
      name: ' Quần Short Kaki Nam 5S Fashion',
   },
   {
      name: 'Áo Nam',
      subMenu: [
         {
            name: 'Áo Phông',
         },
         {
            name: 'Áo Thun',
         },
      ],
   },
];

export const HeaderClient = () => {
   return (
      <header className="h-header-client flex items-center shadow-header-client">
         <div className="container items-center justify-between h-full grid grid-cols-6">
            <div className="col-span-1">
               <Link to={ROUTE_PATH.CLIENT_HOME} className="">
                  <LazyLoadingImage src={LOGO} width="130px" alt="logo" className="rounded-lg" />
               </Link>
            </div>
            <div className="col-span-4 flex gap-6 h-full">
               {data.map((item, index) => (
                  <MenuHeader key={index} data={item} />
               ))}
            </div>
            <div className="col-span-1 h-full flex items-center gap-4 justify-end">
               <Card />
               <User />
               <LanguageSystem />
            </div>
         </div>
      </header>
   );
};
