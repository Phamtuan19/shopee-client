/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link } from 'react-router-dom';

import { SvgIcon } from '~/app/helpers';
import { ROUTE_PATH } from '~/app/constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MenuHeaderProps {
   data: any;
}

export const MenuHeader = ({ data }: MenuHeaderProps) => {
   const { name, subMenu } = data;

   return (
      <div className="relative group">
         <Link to={ROUTE_PATH.CLIENT_PRODUCT} className="flex items-center gap-2 cursor-pointer">
            <p className="font-bold">{name}</p>
            {subMenu && <SvgIcon name="down-chevron" className="w-3 h-3" />}
         </Link>
         <div className="absolute top-full container bg-black h-20 hidden group-hover:block min-w-[400px] -left-10"></div>
      </div>
   );
};
