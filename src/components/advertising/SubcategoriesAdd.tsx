import TextTranslate from '@/components/typography/TextTranslate';
import Link from 'next/link';
import React from 'react'
import styles from './AdvertisingAdd.module.scss';
import { useRouter } from 'next/router';
import Button from '../button/Button';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface IProps {
    category: string;
    subcategories: any;
}
  

const SubcategoriesAdd = ({ category, subcategories }: IProps) => {
  const router = useRouter();

  const { t } = useTranslation();
  const path = router.asPath.replace(/\?.*/, '');

  return (
    <>
        <div className={styles['categories-title-container']}>
            <TextTranslate tag='h2' value='chooseCategory' />
            <Link href="#">
                <TextTranslate tag='p' value='dontKnowCategory'/>
            </Link>
        </div>

        <Button onClick={() => { router.push(router.basePath) } } type='ghost' btnText={t(category) || 'Back'} />

        <ul className={styles['categories-list']}>
            {
                subcategories.map((subcategory: { name: string; }) => (
                    <li key={`${subcategory.name}`}>
                            <Link href={`${path}${subcategory.name}`} className={styles['categories-link']}>
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