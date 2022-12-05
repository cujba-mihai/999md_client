import React from 'react'
import Accordion from '../accordion/Accordion';
import { Product240Pixels } from '../buy-on-market/BuyOnMarket';
import { Header } from '../categories/Categories';
import style from './Subcategories.module.scss';

const Subcategories  = () => {
  return (
    <>
        <Header text="Automobile" />
        <div className={style['main-container']}>
            <div className={style['product-list-container']}>
                <div className={style['list-style']}> кратко | подробно | фото </div>
                <div className={style["product-list"]}>
                    {
                        Array.from({length: 6}).map((_, index) => (
                            <Product240Pixels 
                                key={index} 
                                imgSrc={`ex${index + 1}.jpg`} 
                                price={~~((index + 1)  * 242.35).toFixed(2)} 
                                productUrl={`/products/${index + 1}`} 
                                title={'Transport'} 
                                alt={'Transport'} 
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