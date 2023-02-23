import { Product } from '@/graphql/__generated__/graphql';
import React from 'react'
import { useTranslation } from 'react-i18next';
import Accordion from '../accordion/Accordion';
import  Product240Pixels, { TCurrency } from '../buy-on-market/Product240Pixels';
import { Header } from '../categories/Categories';
import style from './Subcategories.module.scss';

interface ISubcategoriesProps {
    upperLayerProducts: Partial<Product & { id?: string }>[]
    subcategoryName: string;
}

const Subcategories  = ({ upperLayerProducts, subcategoryName }: ISubcategoriesProps) => {
const { t } = useTranslation()
  return (
    <>
        <Header text={t(subcategoryName)} />
        <div className={style['main-container']}>
            <div className={style['product-list-container']}>
                <div className={style['list-style']}> кратко | подробно | фото </div>
                <div className={style["product-list"]}>
                    {
                        upperLayerProducts.map((product) => (
                            <Product240Pixels 
                                currency={product?.currency as TCurrency || 'MDL'}
                                key={product._id} 
                                imgSrc={product?.thumbnail || ''} 
                                price={product.price || 0} 
                                productUrl={`/products/${product._id || product?.id || ''}`} 
                                title={product.name || ''} 
                                alt={product.name || ''} 
                            />
                        ))
                    }
                    </div>
            </div>

            <div className={style["filters-container"]}>
            <div className={style.currency}> валюта | € | $ | лей </div>
                <div className="filters">
                <Accordion title='CATEGORIES'  Component={<h1>GOOD EVENING</h1>}/>
                </div>
            </div>



        </div>
    </>
  )
}

export default Subcategories;