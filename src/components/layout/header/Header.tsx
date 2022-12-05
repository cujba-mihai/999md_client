<<<<<<< HEAD
// import { useRouter } from 'next/router';

=======
import Image from '@/components/Image';
import Link from 'next/link';
>>>>>>> 2926ea82c0fa485a669fc60d7822177f9082d636
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from '@/components/Image';
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
          <Link className={styles['header__logo-wrapper']} href="/">
            <Image
              className={styles.header__logo}
              key="logo999.svg"
              alt="999.md"
              src="logo999.svg"
              width={73.33}
              height= {44}
            />
          </Link>

          <div className={styles.header__region}>
            <p className={styles['header__region-selection']}>Moldova</p>
          </div>

          <div className={styles['header__ads-count-wrapper']}>
            <p className={styles['header__ads-count']}>
              astăzi 30 949 anunţuri
            </p>
          </div>

          <div className={styles['header__general-info']}>
            <Link href="#">
              <p>Cum să vinzi mașina pe 999, ca să fie cumpărată?</p>
            </Link>
          </div>
        </div>

        <div className={styles['header__right-wrapper']}>
          <nav className={styles['header__auth-container']}>
<<<<<<< HEAD
            <Link href="/authenticate" className={styles['header__auth-register']}>
              înregistrare
            </Link>
            
            <Link href={{
                  pathname: '/authenticate',
                  query: { login: 'true' },
                }} className={styles['header__auth-authenticate']}>
=======
            <Link href="#" className={styles['header__auth-register']}>
              înregistrare
            </Link>
            <Link href="#" className={styles['header__auth-authenticate']}>
>>>>>>> 2926ea82c0fa485a669fc60d7822177f9082d636
              autentificare
            </Link>
          </nav>
        </div>
      </header>

      <div className={styles['main-bar']}>
        <div className={styles['main-bar__wrapper']}>
          <div className={styles['main-bar__container']}>
            <div className={styles['main-bar__categories-container']}>
              <button className={styles['main-bar__categories-button']}>
                <Image
                  className={styles['main-bar__burger-icon']}
                  src="burger.svg"
                  alt="Categories Menu"
                  width={24}
                  height={24}
                />
                <p className={styles['main-bar__categories-title']}>
                  Categorii
                </p>
              </button>
            </div>

            <Link href="#" className={styles['main-bar__market-link']}>
              <Image
                className={styles['main-bar__market-icon']}
                src="home.svg"
                alt="Market"
                width={24}
                height={24}
              />
              <p className={styles['main-bar__market-text']}>Market</p>

              <Image
                className={styles['main-bar__market-new']}
                src="new.svg"
                alt="New market features"
                width={24}
                height={24}
              />
            </Link>

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
                  <Link className={styles['main-bar__search-result']} href="#">
                    <span>Electrocasnice</span>
                  </Link>
                  <Link className={styles['main-bar__search-result']} href="#">
                    <span>Imobiliare</span>
                  </Link>
                  <Link className={styles['main-bar__search-result']} href="#">
                    <span>Instrumente</span>
                  </Link>
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
