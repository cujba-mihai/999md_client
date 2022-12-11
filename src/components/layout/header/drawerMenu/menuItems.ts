export const MenuItems = [
    {
      name: 'home',
      href: '/',
      icon: 'home-menu.svg',
    },
    {
      name: 'market',
      href: '/',
      icon: 'market.svg'
    },
    {
      name: 'blog',
      href: '/',
      icon: 'blog.svg'
    },
    {
      name: 'info',
      href: '/',
      icon: 'info.svg',
      withDivider: true
    },
    {
      name: 'auth',
      href: '/authenticate/?login=true',
      icon: 'auth.svg',
    },
    {
      name: 'signUp',
      href: '/authenticate',
      icon: 'signup.svg',
    },
    {
      name: 'language',
      href: '#',
      icon: 'language.svg',
      withLanguageSwitcher: true
    },
]

export const contactDetails = [
  {
    name: '+373 22 888002',
    href: 'tel:+37322888002',
    icon: 'phone.svg',
  },
  {
    name: 'info@999.md',
    href: 'mailto:info@999.md',
    icon: 'email.svg',
  },
] 

export interface IDrawerItem {
    name: string;
    href: string;
    icon: string;
    withDivider?: boolean;
    withLanguageSwitcher?: boolean;
}