import { Button } from '@components/shadcn-ui';
import { priceFormat } from '@helpers';

export const DiscountCode = () => {
   return (
      <div className="w-full max-w-[325px] ">
         <div className="relative bg-[#fff4f4] border border-solid border-[hsla(0,64%,76%,.5)]  rounded-sm ml-4">
            <div className="absolute left-0 top-0 w-[0.3125rem] h-full">
               {/* <div
                  className="absolute h-full"
                  style={{
                     background:
                        'radial-gradient(circle at 0 .375rem,transparent 0,rgba(0,0,0,.03) .1875rem,#f8d0d3 0,hsla(0,64%,76%,.5) .25rem,#fff4f4 0)',
                     backgroundRepeat: 'repeat-x',
                     backgroundSize: '.25rem .625rem',
                     left: '-3px',
                     top: '0px',
                     width: '0.25rem',
                  }}
               ></div> */}
            </div>
            <div className="grid grid-cols-12">
               <div className="col-span-8">
                  <div className="ml-7 pb-2 pt-2 flex flex-col gap-y-1">
                     <div className="">
                        <div className="text-[#bd0000] text-sm font-bold">Giảm: {priceFormat(30000)}</div>
                        <div className="text-black text-xs font-semibold">Đơn tối thiểu: {priceFormat(299000)}</div>
                     </div>
                     <div className="bg-[rgba(255,105,123,.19)] rounded px-2 py-[2px] flex items-center max-w-max">
                        <span className="text-[#bd0000] text-[11px] font-normal">Áp dụng tất cả sản phẩm</span>
                     </div>
                     <div className="text-[11px] font-normal">HSD: Vô hạn</div>
                  </div>
               </div>
               <div className="col-span-4 ps-0">
                  <div className="border border-dashed border-l-[hsla(0,83%,70%,.502)] border-  flex items-center justify-center h-full">
                     <Button
                        variant="outline"
                        className="bg-[#fceaec] shadow-none hover:bg-[#fceaec] border-none text-[#bd0000] rounded text-sm h-auto px-2 py-[3px] font-semibold"
                     >
                        Lưu
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
