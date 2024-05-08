/* eslint-disable @typescript-eslint/naming-convention */
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useState } from 'react';

import type { InputProps } from '../input';

import { SvgIcon, cn } from '~/app/helpers';

export const InputPassword = forwardRef<HTMLInputElement, InputProps>(
   ({ className, type = 'password', ...props }, ref) => {
      const [showPassword, setShowPassword] = useState<boolean>(false);

      const togglePassword = () => setShowPassword((prev) => !prev);

      const Comp = type !== 'password' ? Slot : 'div';

      return (
         <Comp className="relative w-full">
            <>
               <input
                  type={type}
                  className={cn(
                     'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                     className,
                     {
                        '!border-gray1 bg-white1 !text-black1': Boolean(props.disabled),
                     },
                  )}
                  ref={ref}
                  {...props}
               />
               {type === 'password' && (
                  <button
                     className="absolute inset-y-0 right-3 my-auto ml-3 flex items-center justify-center text-sm"
                     onClick={togglePassword}
                     type="button"
                  >
                     {showPassword ? (
                        <SvgIcon name="eye" className="stroke-gray3" />
                     ) : (
                        <SvgIcon name="eye-off" className="stroke-gray3" />
                     )}
                  </button>
               )}
            </>
         </Comp>
      );
   },
);
