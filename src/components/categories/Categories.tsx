import React from 'react'
import style from './Categories.module.scss'
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import Link from 'next/link';
import Product240Pixels from '../buy-on-market/Product240Pixels';
import { Category } from '@/graphql/__generated__/graphql';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

export const Header = ({text}: {text: string}) => (    <header> 
    <h1 className={style.header}>{text}</h1> 
</header>)

interface ICategoriesProps {
    category: Category
}

const Categories  = ({ category }: ICategoriesProps) => {
    const { t } = useTranslation();

    const router = useRouter();

  return (
    <>
    <CarouselNoPreview slidesToShow={4} autoplay={true} >
    {
        Array.from({length: 6}).map((_, index) => (
            <Product240Pixels 
                currency='MDL'
                key={`${Date.now() * Math.random()}`} 
                imgSrc={`ex${index + 1}.jpg`} 
                price={~~((index + 1)  * 242.35).toFixed(2)} 
                productUrl={`/products/${index + 1}`} 
                title={'Transport'} 
                alt={'Transport'} 
            />
        ))
    }
    </CarouselNoPreview>

    <header> 
        <h1 className={style.header}>{t(category?.name)}</h1> 
    </header>

    <ul className={style.ul}>
        {
            (category.subcategories || []).map((subcategory) => (
                <li key={subcategory.id} className={style.li}>
                    <h3 className={style.h3}>{t(subcategory?.name || '')}</h3>
                    <ul className={style.ulsublist}>
                        {
                            (subcategory?.childSubcategories || []).map((childSubcat) => (
                                <li key={childSubcat.id} className={style.lisublist}>
                                <Link 
                                    href={`${router.asPath}${childSubcat.id}` }
                                    className={style.link}>
                                   {t(childSubcat?.name || '')}
                                </Link>
                            </li>
                            ))
                        }
                    </ul>
                </li>
            ))
                    }
    </ul>
    
    <div className={style["products-container"]}>

    {
        Array.from({length: 32}).map((_, index) => (
        <Product240Pixels 
            currency='MDL' 
            key={`${Date.now() * Math.random()}`} 
            imgSrc={`ex${(Math.floor(Math.random() * 6 + 1)).toFixed(0)}.jpg`} 
            price={~~((index + 1)  * 242.35).toFixed(2)} 
            productUrl={`/products/${index + 1}`} 
            title={'Transport'} 
            alt={'Transport'} 
        />
    ))

    }
    </div>

    </>
  )
}

export default Categories