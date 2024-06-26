import React from 'react';

import { cn } from '~/app/helpers';

export interface StackProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
   const { className, children, ...res } = props;

   return (
      <div className={cn('flex items-center', className)} {...res} ref={ref}>
         {children}
      </div>
   );
});
