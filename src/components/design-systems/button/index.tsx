import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@helpers';

export const buttonVariants = cva('flex gap-2 justify-center items-center rounded-md', {
   variants: {
      variant: {
         outline: 'border border-solid border-black',
         text: '',
         container: 'shadow-button',
      },
      size: {
         small: 'p-small',
         medium: 'p-medium',
         large: 'p-large',
      },
   },

   defaultVariants: {
      variant: 'container',
      size: 'small',
   },
});

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
   VariantProps<typeof buttonVariants> & {
      startIcon?: React.ReactNode;
      endIcon?: React.ReactNode;
      children?: React.ReactNode;
   };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   ({ variant, size, className, startIcon, endIcon, children, ...resProps }, ref) => {
      return (
         <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...resProps}>
            {startIcon && typeof startIcon === 'string' ? '' : startIcon}
            <span>{children}</span>
            {endIcon && typeof endIcon === 'string' ? '' : endIcon}
         </button>
      );
   },
);
