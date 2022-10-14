import PageLayout from '@/components/page-layout/PageLayout';
import Header from '@/components/header/Header';
import { useState } from 'react';

const Index = () => {
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
    </PageLayout>
  );
};

export default Index;
