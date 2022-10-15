// import { useRouter } from 'next/router';

import Svg from '@/components/Svg';
import { Dispatch, SetStateAction } from 'react';
import styles from './Header.module.scss';

interface IProps {
  toggleSearchResults: () => void;
  showSearchResults: boolean;
  setShowSearchResults: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ toggleSearchResults, showSearchResults }: IProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles['header__left-wrapper']}>
          <a className={styles['header__logo-wrapper']} href="/">
            <Svg
              className={styles.header__logo}
              key="logo999.svg"
              alt="999.md"
              src="logo999.svg"
            />
          </a>

          <div className={styles.header__region}>
            <p className={styles['header__region-selection']}>Moldova</p>
          </div>

          <div className={styles['header__ads-count-wrapper']}>
            <p className={styles['header__ads-count']}>
              astăzi 30 949 anunţuri
            </p>
          </div>

          <div className={styles['header__general-info']}>
            <a href="#">
              <p>Cum să vinzi mașina pe 999, ca să fie cumpărată?</p>
            </a>
          </div>
        </div>

        <div className={styles['header__right-wrapper']}>
          <nav className={styles['header__auth-container']}>
            <a href="#" className={styles['header__auth-register']}>
              înregistrare
            </a>
            <a href="#" className={styles['header__auth-authenticate']}>
              autentificare
            </a>
          </nav>
        </div>
      </header>

      <div className={styles['main-bar']}>
        <div className={styles['main-bar__wrapper']}>
          <div className={styles['main-bar__container']}>
            <div className={styles['main-bar__categories-container']}>
              <button className={styles['main-bar__categories-button']}>
                <Svg
                  className={styles['main-bar__burger-icon']}
                  src="burger.svg"
                  alt="Categories Menu"
                />
                <p className={styles['main-bar__categories-title']}>
                  Categorii
                </p>
              </button>
            </div>

            <a href="#" className={styles['main-bar__market-link']}>
              <Svg
                className={styles['main-bar__market-icon']}
                src="home.svg"
                alt="Market"
              />
              <p className={styles['main-bar__market-text']}>Market</p>

              <Svg
                className={styles['main-bar__market-new']}
                src="new.svg"
                alt="New market features"
              />
            </a>

            <div className={styles['main-bar__search-container']}>
              <input
                type="text"
                className={styles['main-bar__search-input']}
                list="searchResults"
                placeholder="Căutare în anunțuri"
                autoComplete="off"
                onFocus={toggleSearchResults}
                onBlur={toggleSearchResults}
              />

              <div className={showSearchResults ? '' : 'hidden'}>
                <div className={styles['main-bar__search-results']}>
                  <a className={styles['main-bar__search-result']} href="#">
                    <span>Electrocasnice</span>
                  </a>
                  <a className={styles['main-bar__search-result']} href="#">
                    <span>Imobiliare</span>
                  </a>
                  <a className={styles['main-bar__search-result']} href="#">
                    <span>Instrumente</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles['main-bar__add-post-container']}>
              <button className={styles['main-bar__add-post-button']}>
                <p>Adaugă anunţ</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
