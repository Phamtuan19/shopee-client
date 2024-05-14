import { BannerSliderWithThumbnails } from './banner-slider-with-thumb-nails';
import { BannerThumbNail } from './banner-thumb-nail';

import '../../../../styles/global.css';

export const Slider = () => {
   return (
      <div className="container grid grid-cols-6 gap-1 mt-4 h-full">
         <div className="lg:col-span-4 col-span-6">
            <BannerSliderWithThumbnails />
         </div>
         <div className="lg:col-span-2 col-span-6 flex lg:flex-col lg:gap-y-1 gap-x-1 ">
            <div className="w-full lg:h-1/2 h-full">
               <BannerThumbNail />
            </div>
            <div className="w-full lg:h-1/2 h-full">
               <BannerThumbNail />
            </div>
         </div>
      </div>
   );
};
