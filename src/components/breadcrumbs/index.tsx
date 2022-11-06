import style from './BreadCrumbs.module.scss';
import Link from 'next/link';

const BreadCrumbs = () => {
  return (
    <nav className={style.container} aria-label="breadcrumbs">
      <ol className={style.breadcrumb}>
        <li className={style['item-inactive']}>
          <Link href="/" about="Acasă">
            Acasă
          </Link>
        </li>
        <li className={style['item-inactive']}>
          <Link href="/products/" about="Products">
            Transport
          </Link>
        </li>
        <li className={style['item-inactive']}>
          <Link href="/products/" about="Autoturisme">
            Autoturisme
          </Link>
        </li>
        <li className={style['item-active']}>
          <span>Toyota Rav 4 </span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
