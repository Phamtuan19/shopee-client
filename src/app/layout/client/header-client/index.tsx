import { Link } from 'react-router-dom';

import { MenuHeader } from './component/menu-header';
import { Card } from './component/card';
import { User } from './component/user';

import { LazyLoadingImage } from '@components';
import { ROUTE_PATH } from '@constants';
import { useI18n } from '@hooks';
import { images } from '@assets/images';

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
   const translate = useI18n();

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
               <div className="relative h-full flex items-center group">
                  <div className="flex gap-x-2 items-center">
                     <LazyLoadingImage src={images.vnFlag} alt={`${translate('FLAG')}`} width="30" height="20" />
                     {`${translate('FLAG')}`}
                  </div>
                  <div
                     className="header-user hidden group-hover:block  absolute z-10 bg-white rounded-md right-0 top-[92%]"
                     style={{ width: 'max-content' }}
                  >
                     <div className="py-2 w-full flex flex-col gap-y-1">
                        <div className="px-4 py-1 cursor-pointer hover:text-red-500 hover:bg-slate-400">{`${translate('COUNTRY_VI')}`}</div>
                        <div className="px-4 py-1 cursor-pointer hover:text-red-500 hover:bg-slate-400">{`${translate('COUNTRY_EN')}`}</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};
