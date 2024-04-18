import React from 'react';

import { cn } from '@helpers';

export interface StackProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
   children: React.ReactNode;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>((props) => {
   const { className, children, ...res } = props;

   return (
      <div className={cn('flex items-center', className)} {...res}>
         {children}
      </div>
   );
});
