import { Link } from 'react-router-dom';

import { MenuHeader } from './component/menu-header';
import { Card } from './component/card';
import { User } from './component/user';
import { SheetMobile } from './component/sheet-mobile';

import { LanguageSystem, LazyLoadingImage } from '@components';
import { ROUTE_PATH } from '@constants';
import { SvgIcon } from '@helpers';

const LOGO = 'https://5sfashion.vn/storage/upload/images/logo/logo.png';

const data = [
   {
      name: 'Sale',
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
   {
      name: 'Áo Nam',
      subMenu: [
         {
            name: 'Áo Phông',
         },
         {
            name: 'Áo Thun',
         },
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
         <div className="container h-full items-center justify-between grid md:grid-cols-12 lg:grid-cols-6 grid-cols-6 md:py-0 py-3">
            <div className="col-span-[1] md:hidden block">
               <SheetMobile />
            </div>
            <div className="col-span-4 flex md:justify-start justify-center items-center md:col-span-2 lg:col-span-1 h-full">
               <Link to={ROUTE_PATH.CLIENT_HOME} className="h-full flex justify-center items-center">
                  <LazyLoadingImage src={LOGO} width="130px" height="30px" alt="logo" className="rounded-lg" />
               </Link>
            </div>
            <div className="md:col-span-8 lg:col-span-4 hidden md:flex gap-6  h-full">
               {data.map((item, index) => (
                  <MenuHeader key={index} data={item} />
               ))}
            </div>
            <div className="hidden md:flex col-span-2 lg:col-span-1 h-full items-center gap-1 md:gap-4 justify-end">
               <Card />
               <User />
               <LanguageSystem />
            </div>
            <div className="flex justify-end md:hidden col-span-1">
               <div className="cursor-pointer">
                  <SvgIcon name="cart" width="22" height="22" />
               </div>
            </div>
         </div>
      </header>
   );
};
