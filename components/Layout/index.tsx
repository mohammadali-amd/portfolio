import React from 'react';
import Header from '@/components/Header';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <main>
         <Header />
         {children}
      </main>
   );
};

export default Layout;
