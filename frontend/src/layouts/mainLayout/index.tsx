import { FC, ReactNode } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
