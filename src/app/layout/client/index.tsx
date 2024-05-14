import { HeaderClient } from './header-client';

export const LayoutClient = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <HeaderClient />
         {children}
      </>
   );
};
