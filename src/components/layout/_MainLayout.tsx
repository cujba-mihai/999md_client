import PageLayout from '@/components/layout/page-layout/PageLayout';
import Header from './header/Header';
import { ReactNode, useState } from 'react';

// interface IAuthProps {
//   requiresAuth?: boolean;
//   redirectTo?: string;
// }

// interface ILayoutProps {
//   children?: ReactNode;
// }

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
    </PageLayout>
  );
};

export default MainLayout;
