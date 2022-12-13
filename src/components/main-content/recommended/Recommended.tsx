import React from 'react';
import { useTranslation } from 'next-i18next';
import style from './Recommended.module.scss';
import RecommendedItem from './RecommendedItem';

const Recommended = () => {
  const { t } = useTranslation();

  return (
    <section className={style['recommended-container']}>
      <h2 className={style['recommended-container-label']}>{t('recommended')}</h2>
      <div className={style['recommended-items-container']}>
        {Array.from({ length: 12 }).map((_, index) => (
          <RecommendedItem key={index} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
