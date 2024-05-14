import { Link } from 'react-router-dom';

import { LazyLoadingImage } from '@components';
import { ROUTE_PATH } from '@constants';

const LOGO = 'https://5sfashion.vn/storage/upload/images/logo/logo.png';

export const Footer = () => {
   return (
      <footer className=" mt-10 bg-white border-t border-solid border-[#eee] py-8">
         <div className="container">
            <Link to={ROUTE_PATH.CLIENT_HOME}>
               <LazyLoadingImage className="h-8 w-36" src={LOGO} alt="" />
            </Link>
            <div className="grid grid-cols-4">
               <div className="col-span-4 sm:col-span-2 lg:col-span-1 md:pb-0 pb-4 md:border-none border-b border-solid border-[#eee]">
                  <div className="text-sm text-black font-bold mt-7">Công ty Cổ phần 5S Fashion</div>
                  <div className="mt-2 flex flex-col gap-y-2">
                     <div className="text-sm text-black font-medium">Hotline: 18008118</div>
                     <div className="text-sm text-black font-medium">Hệ thống cửa hàng</div>
                     <div className="text-sm text-black font-medium">Email: cskh@5sfashion.vn</div>
                  </div>
               </div>
               <div className="col-span-4 sm:col-span-2 lg:col-span-1 md:pb-0 pb-4 md:border-none border-b border-solid border-[#eee]">
                  <div className="text-sm text-black font-bold mt-7">Về 5S Fashion</div>
                  <div className="mt-2">
                     <ul className="ml-2 flex flex-col gap-y-2">
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Tin Tức</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Hệ thống cửa hàng</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Tuyển dụng</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-span-4 sm:col-span-2 lg:col-span-1 md:pb-0 pb-4 md:border-none border-b border-solid border-[#eee]">
                  <div className="text-sm text-black font-bold mt-7">Hỗ trợ khách hàng tại 5S Fashion</div>
                  <div className="mt-2">
                     <ul className="ml-2 flex flex-col gap-y-2">
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Tổng đài chăm sóc khách hàng</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Chính sách bảo mật</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Chính sách bảo mật</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Chính sách đổi trả, bảo hành</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Hướng dẫn chọn Size</Link>
                        </li>
                        <li className="text-[#7b7d85] text-sm font-medium list-disc list-inside">
                           <Link to="">Hướng dẫn mua hàng online</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};
