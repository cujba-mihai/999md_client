import Button from '@/components/button/Button';
import React, { SyntheticEvent, useCallback, useState } from 'react'
import styles from './LanguageSwitcher.module.scss';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';

export interface ILangSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: ILangSwitcherProps) => {
  const [isOpen, setIsOpen ] = useState(false);
  const router = useRouter();
  const currentLocale = router.locale || 'RO';

  const otherLocales = ['ro', 'ru', 'en'].filter(locale => locale !== currentLocale);

  const toggleOpen = (e: SyntheticEvent<Element, Event>) => {
    e.stopPropagation();

    setIsOpen((prev) => !prev);
  };

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;

      setCookie("NEXT_LOCALE", locale);

      return router.push(path, path, { locale });
    },
    [router]
  );

  return (
    <div className={`${styles.container} round ${className ? className : ''}`}>
      <Button onClick={toggleOpen} btnText={currentLocale} type='ghost' customClass={styles.language} />
        {
          isOpen && (
            <div className={styles.options}>
              {
                otherLocales.map(locale => (
                  <Button 
                    key={`${locale}-${Date.now()}`} 
                    onClick={() => switchToLocale(locale)} 
                    btnText={locale} 
                    type='ghost' 
                    customClass={styles.language} 
                  />
                ))
              }
            </div>
          )
        }
    </div>
  )
}