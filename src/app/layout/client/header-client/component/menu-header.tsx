/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
      <div className="relative h-full flex items-center group">
         <Link to={ROUTE_PATH.CLIENT_PRODUCT} className="flex items-center gap-2 cursor-pointer ">
            <p className="font-medium group-hover:text-active hover:text-active text-black">{name}</p>
            {subMenu && <SvgIcon name="down-chevron" className="w-3 h-3" />}
         </Link>
         {subMenu && (
            <div className="z-10 shadow-submenu p-6 absolute rounded-b-md top-[99%] hidden group-hover:block bg-white m-h-20  min-w-[400px] -left-10">
               <div className="flex flex-col gap-y-2">
                  {subMenu.map((item: any, index: number) => (
                     <div key={index} className="">
                        <Link to="/" className="hover:text-active">
                           {item.name}
                        </Link>
                     </div>
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};
