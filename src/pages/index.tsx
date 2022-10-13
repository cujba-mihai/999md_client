// import { useRouter } from 'next/router';

import Svg from '@/components/Svg';
import { useState } from 'react';

const Index = () => {
  // const router = useRouter();
  const [showSearchResults, setShowSearchResults] = useState(false);

  const toggleSearchResults = () => {
    setShowSearchResults((show) => !show);
  };

  return (
    <div className="main-page-layout">
      <header className="header">
        <div className="header__left-wrapper">
          <a className="header__logo-wrapper" href="/">
            <Svg
              className="header__logo"
              key="logo999.svg"
              alt="999.md"
              src="logo999.svg"
            />
          </a>

          <div className="header__region">
            <p className="header__region-selection">Moldova</p>
          </div>

          <div className="header__ads-count-wrapper">
            <p className="header__ads-count">astăzi 30 949 anunţuri</p>
          </div>

          <div className="header__general-info">
            <a href="#">
              <p>Cum să vinzi mașina pe 999, ca să fie cumpărată?</p>
            </a>
          </div>
        </div>

        <div className="header__right-wrapper">
          <nav className="header__auth-container">
            <a href="#" className="header__auth-register">
              înregistrare
            </a>
            <a href="#" className="header__auth-authenticate">
              autentificare
            </a>
          </nav>
        </div>
      </header>

      <div className="main-bar">
        <div className="main-bar__wrapper">
          <div className="main-bar__container">
            <div className="main-bar__categories-container">
              <button className="main-bar__categories-button">
                <Svg
                  className="main-bar__burger-icon"
                  src="burger.svg"
                  alt="Categories Menu"
                />
                <p className="main-bar__categories-title">Categorii</p>
              </button>
            </div>

            <a href="#" className="main-bar__market-link">
              <Svg
                className="main-bar__market-icon"
                src="home.svg"
                alt="Market"
              />
              <p className="main-bar__market-text">Market</p>

              <Svg
                className="main-bar__market-new"
                src="new.svg"
                alt="New market features"
              />
            </a>

            <div className="main-bar__search-container">
              <input
                type="text"
                className="main-bar__search-input"
                list="searchResults"
                placeholder="Căutare în anunțuri"
                autoComplete="off"
                onFocus={toggleSearchResults}
                onBlur={toggleSearchResults}
              />

              <div
                className={`main-bar__search-results ${
                  showSearchResults || 'hidden'
                }`}
              >
                <a className="main-bar__search-result" href="#">
                  <span>Electrocasnice</span>
                </a>
                <a className="main-bar__search-result" href="#">
                  <span>Imobiliare</span>
                </a>
                <a className="main-bar__search-result" href="#">
                  <span>Instrumente</span>
                </a>
              </div>
            </div>
            <div className="main-bar__add-post-container">
              <button className="main-bar__add-post-button">
                <p>Adaugă anunţ</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="website-body">
        <p>asjdnjasndkl</p>
      </main>
    </div>
  );
};

export default Index;
