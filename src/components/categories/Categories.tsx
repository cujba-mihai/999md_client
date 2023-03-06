import React, { useMemo } from 'react'
import style from './Categories.module.scss'
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import Link from 'next/link';
import Product240Pixels, { TCurrency } from '../buy-on-market/Product240Pixels';
import { Category, Subcategory } from '@/graphql/__generated__/graphql';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { GetProductsBySubcategory } from '@/types/subcategories';

export const Header = ({text}: {text: string}) => (    <header> 
    <h1 className={style.header}>{text}</h1> 
</header>)

interface IDisplaySubcategories {
    subcategories: Subcategory[]
}

export const DisplaySubcategories = ({ subcategories }: IDisplaySubcategories) => {
    const router = useRouter();
    const { t } = useTranslation();

    const renderedSubcategories = useMemo(() => {
        return (subcategories || []).map((subcategory) => (
            <li key={subcategory._id} className={style.li}>
                <h3 className={style.h3}>{t(subcategory?.name || '')}</h3>
                <ul className={style.ulsublist}>
                    {
                        (subcategory?.childSubcategories || []).map((childSubcategory) => (
                            <li key={childSubcategory._id} className={style.lisublist}>
                            <Link 
                                href={`${router.asPath}${childSubcategory.name}` }
                                className={style.link}>
                               {t(childSubcategory?.name || '')}
                            </Link>
                        </li>
                        ))
                    }
                </ul>
            </li>
        ))
    }, [])

    return (<ul className={style.ul}>{renderedSubcategories}</ul>)
}

interface ICategoriesProps {
    category: Category;
    products: GetProductsBySubcategory[];
}

const Categories  = ({ category, products }: ICategoriesProps) => {
    const { t } = useTranslation();

  return (
    <>
    <CarouselNoPreview slidesToShow={4} autoplay={true} >
    {
        Array(6).map((_, index) => (
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

    <DisplaySubcategories subcategories={category.subcategories || []} />
    
    <div className={style["products-container"]}>

    {
        products.map(product => (
        <Product240Pixels 
            currency={product.currency as TCurrency}
            key={product._id} 
            imgSrc={product.thumbnail} 
            price={product.price} 
            productUrl={`/products/${product._id}`} 
            title={product.name} 
            alt={product.name} 
        />
    ))

    }
    </div>

    </>
  )
}

export default Categories