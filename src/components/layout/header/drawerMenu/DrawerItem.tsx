import Image from '@/components/Image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../languageSwitcher/LanguageSwitcher';
import styles from './DrawerMenu.module.scss';
import { IDrawerItem } from './menuItems';

export const DrawerItem = ({ name, href, icon, withDivider, withLanguageSwitcher }: IDrawerItem) => {
    const { t } = useTranslation();

    return (
      <>
        <Link className={styles.link} href={href}>
          <Image alt={t(name)} src={icon} width={24} height={24} />
          <span>{t(name)}</span>
          {withLanguageSwitcher && <LanguageSwitcher className={styles["lang-switcher"]} />}
        </Link>
    
        {withDivider && <hr className={styles.divider} />}
      </>
    )
  }