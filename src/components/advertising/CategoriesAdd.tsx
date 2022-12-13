import Image from '@/components/Image';
import TextTranslate from '@/components/typography/TextTranslate';
import Link from 'next/link';
import React from 'react'
import { categories } from './dummyData';
import styles from './AdvertisingAdd.module.scss';

const CategoriesAdd = () => {
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
                categories.map(category => (
                    <li key={`${category.name}-${category.icon}`}>
                            <Link href={`/advertising/add?category=${category.name}`} className={styles['categories-link']}>
                                <Image alt={category.name} src={category.icon} height={24} width={24} key={`${category.name}-${category.icon}`}/>
                                <TextTranslate tag="p" value={category.name} />
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