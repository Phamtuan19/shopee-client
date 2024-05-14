import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const image = [
   'https://cf.shopee.vn/file/vn-50009109-fce824078447676ee91a156c342ed8f3_xxhdpi',
   'https://cf.shopee.vn/file/vn-50009109-dcd71b4afb49522cb80d2dd1f83230a5_xxhdpi',
   'https://cf.shopee.vn/file/vn-50009109-9f55e03457f53c21641e034794aa44a0_xxhdpi',
];

export const BannerSliderWithThumbnails = () => {
   return (
      <Swiper
         navigation={true}
         centeredSlides={true}
         autoplay={{
            delay: 5000,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         modules={[Autoplay, Navigation, Pagination]}
         className="mySwiper  rounded-md"
      >
         {image.map((item) => (
            <SwiperSlide className="bg-transparent text-white">
               <Link to="/">
                  <LazyLoadImage src={item} alt="" className="rounded-md object-fill w-full h-full" />
               </Link>
            </SwiperSlide>
         ))}
      </Swiper>
   );
};
