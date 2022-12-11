import Button from '@/components/button/Button';
import React, { SyntheticEvent, useState } from 'react'
import styles from './LanguageSwitcher.module.scss';
import useLocale from '@/hooks/useLocale';

export interface ILangSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: ILangSwitcherProps) => {
  const [isOpen, setIsOpen ] = useState(false);
  const { userLocale, otherLocales, switchToLocale } = useLocale();

  const toggleOpen = (e: SyntheticEvent<Element, Event>) => {
    e.stopPropagation();

    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.container} round ${className ? className : ''}`}>
      <Button onClick={toggleOpen} btnText={userLocale} type='ghost' customClass={styles.language} />
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