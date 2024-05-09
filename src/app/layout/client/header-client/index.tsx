import { Link } from 'react-router-dom';

import { MenuHeader } from './component/menu-header';

import { LazyLoadingImage } from '@components';
import { ROUTE_PATH } from '@constants';

const LOGO = 'https://5sfashion.vn/storage/upload/images/logo/logo.png';

const data = [
   {
      name: 'Quần Short Kaki Nam 5S Fashion',
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
      <header className=" h-header-client py-2 flex items-center shadow-header-client">
         <div className="container flex items-center justify-between h-full">
            <Link to={ROUTE_PATH.CLIENT_HOME} className="">
               <LazyLoadingImage src={LOGO} width="130px" alt="logo" className="rounded-lg" />
            </Link>
            <div className="flex gap-3">
               {data.map((item, index) => (
                  <MenuHeader key={index} data={item} />
               ))}
            </div>
            <div className=""></div>
         </div>
      </header>
   );
};
