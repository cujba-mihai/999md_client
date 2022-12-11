import React from 'react'
import { DrawerItem } from './DrawerItem';
import styles from './DrawerMenu.module.scss';
import { contactDetails, MenuItems } from './menuItems';

interface IProps {
  isDrawerMenuOpen: boolean;
}

const DrawerMenu = ({isDrawerMenuOpen}: IProps): JSX.Element => {

  return (
    <aside className={`${styles["drawer-menu"]} ${styles[isDrawerMenuOpen ? 'open' : 'closed']}`}>
      <ul className={styles['list-container']}>
        {
          MenuItems.map(({ name, href, icon, withDivider, withLanguageSwitcher }) => (
            <DrawerItem 
              withLanguageSwitcher={withLanguageSwitcher}
              key={`${name}-${Date.now()}}`} 
              href={href} 
              name={name} 
              withDivider={withDivider} 
              icon={icon} 
            />
          ))
        }
      </ul>

      <ul className={styles["contact-details"]}> 
        {
          contactDetails.map(({name, href, icon}) => (
            <DrawerItem 
              key={`${name}-${Date.now()}}-${icon}-${href}`} 
              href={href} 
              name={name} 
              icon={icon} 
            />
          ))
        }
      </ul>
    </aside>
  )
}

export default DrawerMenu;