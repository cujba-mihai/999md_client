import PageLayout from '@/components/layout/page-layout/PageLayout';
import Header from './header/Header';
import { ReactNode, useState } from 'react';
import Footer from './footer/Footer';

const MainLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleSearchResults = () => {
    setShowSearchResults((show) => !show);
  };

  return (
    <PageLayout>
      <Header
        toggleSearchResults={toggleSearchResults}
        showSearchResults={showSearchResults}
        setShowSearchResults={setShowSearchResults}
      />
      {children}
      <Footer />
    </PageLayout>
  );
};

export default MainLayout;
