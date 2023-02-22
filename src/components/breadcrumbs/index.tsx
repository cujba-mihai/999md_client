import style from './BreadCrumbs.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface IBreadCrumbsProps {
  paths: string[];
}

const BreadCrumbs = ({ paths }: IBreadCrumbsProps) => {
  const { t } = useTranslation();

  const items = useMemo(() => {
    return paths.map((path, index) => {
      const isActive = index === paths.length - 1;
      const href = paths.slice(0, index + 1).join('/').replace(/\/{2,}/, '/');

      return (
        <li key={path} className={style[`item-${isActive ? 'active' : 'inactive'}`]}>
          <Link href={href} about={path}>
            {t(path)}
          </Link>
      </li>
      )
    })
  }, [paths])

  return (
    <nav className={style.container} aria-label="breadcrumbs">
      <ol className={style.breadcrumb}>
        <li className={style['item-inactive']}>
          <Link href="/" about={t('home')}>
            {t('home')}
          </Link>
        </li>
        {items}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
