import { IHomePageProps } from '@/pages';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './Categories.module.scss';

const Categories = ({categories}: IHomePageProps) => {
  const { t } = useTranslation();
  return (
    <section className={style['categories-container']}>
      <ul className={style.categories}>
        <div className={style['label-container']}>
          <h2 className={style['categories-label']}>{t('advertisings')}</h2>
        </div>
        {categories.map((category) => (
          <li key={category.id} className={style.category}>
            <Link className={style.category} href={`/categories/${category.name.toLowerCase()}`}>
              <p className={style['link-text']}>{t(category.name)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
