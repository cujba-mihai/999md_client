import React from 'react'
import style from './Categories.module.scss'
import CarouselNoPreview from '../carousel/CarouselNoPreview';
import Link from 'next/link';
import DUMMY_DATA from './DummyData';
import Product240Pixels from '../buy-on-market/Product240Pixels';

export const Header = ({text}: {text: string}) => (    <header> 
    <h1 className={style.header}>{text}</h1> 
</header>)

const Categories  = () => {
  return (
    <>
    <CarouselNoPreview slidesToShow={4} autoplay={true} >
    {
        Array.from({length: 6}).map((_, index) => (
            <Product240Pixels 
                currency='MDL'
                key={index} 
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
        <h1 className={style.header}>Transport </h1> 
    </header>

    <ul className={style.ul}>
        {
            Object.keys(DUMMY_DATA).map((data, index) => (
                <li key={`${data} - ${index}`} className={style.li}>
                <h3 className={style.h3}>{data}</h3>
                <ul className={style.ulsublist}>
                    {
                        DUMMY_DATA?.[data].map((el: {subcat: string;}, i: number) => (
                            <li key={`${el.subcat} - ${i}`} className={style.lisublist}>
                            <Link href='/subcategory/telephone' className={style.link}>
                               {el.subcat}
                            </Link>
                                <span className={style.count}>48 060</span>
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
        <Product240Pixels currency='MDL' key={index} imgSrc={`ex${(Math.floor(Math.random() * 6 + 1)).toFixed(0)}.jpg`} price={~~((index + 1)  * 242.35).toFixed(2)} productUrl={`/products/${index + 1}`} title={'Transport'} alt={'Transport'} />
    ))

    }
    </div>

    </>
  )
}

export default Categories