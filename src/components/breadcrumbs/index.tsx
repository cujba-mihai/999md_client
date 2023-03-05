import style from './BreadCrumbs.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

interface IBreadCrumbsProps {
  paths: string[];
}

interface IBreadCrumbItem {
  path: string;
  isActive: boolean;
  label: string;
}

const BreadCrumbItem = ({ path, isActive, label }: IBreadCrumbItem) => (
  <li key={path} className={style[`item-${isActive ? 'active' : 'inactive'}`]}>
    <Link href={path}>{label}</Link>
  </li>
);


const BreadCrumbs = ({ paths }: IBreadCrumbsProps) => {
  const { t } = useTranslation();

  const breadCrumbItems = useMemo(() => {
    return paths.map((path, index) => {
      const isActive = index === paths.length - 1;
      const label = t(path.replace(/\/\w+\//g, ''));
      const href = `${paths.slice(0, index + 1).join('/')}/`.replace(/\/{2,}/g, '/');

      return <BreadCrumbItem key={path} path={href} isActive={isActive} label={label} />;
    });
  }, [paths]);
  

  return (
    <nav className={style.container} aria-label="breadcrumbs">
      <ol className={style.breadcrumb}>
        <li className={style['item-inactive']}>
          <Link href="/" about={t('home')}>
            {t('home')}
          </Link>
        </li>
        {breadCrumbItems}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
