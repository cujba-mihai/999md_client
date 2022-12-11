'use client'; // this directive should be at top of the file, before any imports.
import PageLayout from '@/components/layout/page-layout/PageLayout';
import Header from './header/Header';
import {  PropsWithChildren, useState } from 'react';
import Footer from './footer/Footer';
import DrawerMenu from './header/drawerMenu/DrawerMenu';

const MainLayout = ({ children }: PropsWithChildren): JSX.Element => {
  const [showSearchResults, setShowSearchResults] = useState(false);

  const [isDrawerMenuOpen, setIsDrawerMenuOpen ] = useState(false);

  const toggleDrawerMenu = () => {
    setIsDrawerMenuOpen((previous) => !previous)
  }

  const toggleSearchResults = () => {
    setShowSearchResults((show) => !show);
  };

  return (
    <>
    <DrawerMenu isDrawerMenuOpen={isDrawerMenuOpen} />
    <PageLayout isDrawerMenuOpen={isDrawerMenuOpen}>
      <Header
        toggleDrawerMenu={toggleDrawerMenu}
        toggleSearchResults={toggleSearchResults}
        showSearchResults={showSearchResults}
        setShowSearchResults={setShowSearchResults}
      />
      { children }
      <Footer />
    </PageLayout>
    </>

  );
};

export default MainLayout;
