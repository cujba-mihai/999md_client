import Image from '@/components/Image';
import TextTranslate from '@/components/typography/TextTranslate';
import Link from 'next/link';
import React from 'react'
import styles from './AdvertisingAdd.module.scss';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';


const CategoriesAdd = ({ categories }: any) => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <>
        <div className={styles['categories-title-container']}>
            <TextTranslate tag='h2' value='chooseCategory' />
            <Link href="#">
                <TextTranslate tag='p' value='dontKnowCategory'/>
            </Link>
        </div>

        <ul className={styles['categories-list']}>
            {
                (categories || []).map((category: { name: string; icon: string; }) => (
                    <li key={`${category.name}-${category.icon}`}>
                            <Link href={{pathname: `${router.asPath}${category.name}`} } className={styles['categories-link']}>
                                <Image alt={t(category.name)} src={category.icon} height={24} width={24} key={`${category.name}-${category.icon}`}/>
                                <TextTranslate tag="p" value={category.name} />
                                {/* { t(category.name)} */}
                            </Link>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

CategoriesAdd.withLayout = true;

export default CategoriesAdd