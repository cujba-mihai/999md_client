import TextTranslate from '@/components/typography/TextTranslate';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { subcategories } from './dummyData';
import styles from './CategoriesAdd.module.scss';
import { useRouter } from 'next/router';
import Button from '../button/Button';
import { useSearchParams } from 'next/navigation';


const SubcategoriesAdd = () => {
  const router = useRouter();
  const query = useSearchParams();

  const [ category, setCategory ] = useState<string | null>(null);

  useEffect(() => {
    const queryCategory = query.get('category');

    setCategory(queryCategory);
  }, [query])

  return (
    <>
        <div className={styles['categories-title-container']}>
            <TextTranslate tag='h2' value='chooseSubcategory' />
            <Link href="#">
                <TextTranslate tag='p' value='dontKnowSubcategory'/>
            </Link>
        </div>

        <Button onClick={() => { router.push(router.basePath) } } type='ghost' btnText={category || 'Back'} />

        <ul className={styles['categories-list']}>
            {
                subcategories.map(subcategory => (
                    <li key={`${subcategory.name}`}>
                            <Link href={`/advertising/add?category=${category}&subcategory=${subcategory.name}`} className={styles['categories-link']}>
                                <TextTranslate tag="p" value={subcategory.name} />
                            </Link>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default SubcategoriesAdd