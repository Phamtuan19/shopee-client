import React from 'react';

import { Footer } from './footer';
import { HeaderClient } from './header-client';

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="flex flex-col">
         <HeaderClient />
         <div className="">{children}</div>
         <Footer />
      </div>
   );
};
