import React from 'react';
import { useTranslation } from 'next-i18next';
import style from './Recommended.module.scss';
import RecommendedItem from './RecommendedItem';
import { Product } from '@/graphql/__generated__/graphql';

const Recommended = ({products}: {products: Product[]}) => {
  const { t } = useTranslation();

  return (
    <section className={style['recommended-container']}>
      <h2 className={style['recommended-container-label']}>{t('recommended')}</h2>
      <div className={style['recommended-items-container']}>
        {(products || []).slice(0, 10).map((product) => (
          <RecommendedItem key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Recommended;
