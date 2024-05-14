import { BannerSliderWithThumbnails } from './banner-slider-with-thumb-nails';
import { BannerThumbNail } from './banner-thumb-nail';

import '../../../../styles/global.css';

export const Slider = () => {
   return (
      <div className="container grid grid-cols-6 gap-1 mt-4 h-full">
         <div className="col-span-4">
            <BannerSliderWithThumbnails />
         </div>
         <div className="col-span-2 flex flex-col gap-y-1">
            <div className="w-full h-1/2">
               <BannerThumbNail />
            </div>
            <div className="w-full h-1/2">
               <BannerThumbNail />
            </div>
         </div>
      </div>
   );
};
