import { Link } from 'react-router-dom';

import { LazyLoadingImage } from '@components/design-systems/lazy-loading-image';

const image = 'https://cf.shopee.vn/file/vn-50009109-743be4a9179fa8d9d663dc319b6c8dc1_xhdpi';

export const BannerThumbNail = () => {
   return (
      <Link to="">
         <LazyLoadingImage className="rounded-md object-fill w-full h-full" src={image} alt="" />
      </Link>
   );
};
