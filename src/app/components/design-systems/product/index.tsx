import { Link } from 'react-router-dom';

import { LazyLoadingImage } from '../lazy-loading-image';

import { priceFormat } from '@helpers';

export const Product = () => {
   return (
      <div className="relative">
         <Link className="" to="">
            <div className="w-full h-[341.644px]">
               <LazyLoadingImage
                  src="https://product.hstatic.net/1000341902/product/2403wts41_black___2403wb42_white__2__6b2e562aa0094a959f2beabd89ebf194_large.jpg"
                  alt=""
                  className="object-fill max-w-full max-h-full w-full h-full"
               />
            </div>
            <div className="pt-1">
               <div className="">
                  <span className="text-xs uppercase font-medium">Maybi</span>
               </div>
               <div className="mb-[5px] font-bold">
                  <Link to="" className="block text-ellipsis whitespace-nowrap overflow-hidden">
                     Áo ôm thun bogen trễ vai Áo ôm thun bogen trễ vai
                  </Link>
               </div>
               <div className="flex justify-between items-center">
                  <p className="text-[#DF0000] font-bold">{priceFormat(134000)}</p>
                  <div className="flex items-center gap-3">
                     <p className="text-[#666666] text-sm line-through">{priceFormat(134000)}</p>
                     <div className="min-w-10 w-auto h-auto py-[3px] px-[15xp]  rounded-full bg-[#d84144] flex items-center justify-center">
                        <span className="font-medium text-xs text-white">-10%</span>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
};
