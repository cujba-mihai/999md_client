import React from 'react'
import Link from './Link';
import { ProductCard } from './ProductCard';

function Main() {
    return (
        <div className="grid grid-cols-index-main grid-rows-product-cards w-[1000px] max-h-[677px] mx-auto pt-5 gap-x-4">
            <nav className="flex relative col-span-1 p-4 rounded border-1 h-fit border-gray-500 border-solid">
                <h3 className='absolute -top-3 px-2 bg-white'>Anunțuri</h3>
                <ul className='b-2 leading-7'>
                    <li><Link text='Transport' href='#' /></li>
                    <li><Link text='Imobiliare' href='#' /></li>
                    <li><Link text='Aparate telefonice și gadget-uri' href='#' /></li>
                    <li><Link text='Calculatoare și birotică' href='#' /></li>
                    <li><Link text='Construcții și reparații' href='#' /></li>
                    <li><Link text='Haine, încălțăminte și accesorii' href='#' /></li>
                    <li><Link text='Mobilă și interior' href='#' /></li>
                    <li><Link text='Audio-Video-Foto' href='#' /></li>
                    <li><Link text='Diverse' href='#' /></li>
                    <li><Link text='Totul pentru sărbători' href='#' /></li>
                    <li><Link text='Tehnică de uz casnic' href='#' /></li>
                    <li><Link text='Oferte de lucru' href='#' /></li>
                    <li><Link text='Servicii' href='#' /></li>
                    <li><Link text='Sport, sănătate, frumusețe' href='#' /></li>
                    <li><Link text='Turism, recreație și divertisment' href='#' /></li>
                    <li><Link text='Business' href='#' /></li>
                    <li><Link text='Totul pentru casă și oficiu' href='#' /></li>
                    <li><Link text='Lumea copiilor' href='#' /></li>
                    <li><Link text='Gospodăria țărănească' href='#' /></li>
                    <li><Link text='Animale de companie și plante' href='#' /></li>
                    <li><Link text='Instrumente muzicale' href='#' /></li>
                    <li><Link text='Matrimoniale' href='#' /></li>
                </ul>
            </nav>
            <div className="grid grid-cols-product-cards h-fit gap-2 relative col-span-1 p-4 rounded border-1 border-gray-500 border-solid">
                <h3 className='absolute -top-3 translate-x-44 bg-white'>Recomandate</h3>
                {Array.from({ length: 9 }, (_, i) => i).map(el => (
                    <ProductCard key={el} />
                ))}
            </div>
            <aside className="flex flex-col gap-4">
                <img src={require('@/public/temp/canvas.png').default.src} className='w-60  cursor-pointer' />
                <img src={require('@/public/temp/ad2.jpg').default.src} className='w-60  cursor-pointer' />
            </aside>
        </div>
    )
}

export { Main };