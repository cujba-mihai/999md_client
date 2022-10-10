import React from 'react';
import Image from 'next/image';

const ProductCard = () => {
  return (
        <a
          href='#'
          className="flex flex-col w-[140px] h-[200px] rounded hover:opacity-75"
        >
            <div className="rounded">
                <Image
                  src={require('@/public/temp/prius.jpg').default.src}
                  width={140}
                  height={105}
                />
            </div>

            <p
              className='hover:border-none hover:text-red-600 border-none text-xs'
            >
              Toyota Prius
            </p>
            <p className='text-xs text-gray-900'>
              8 600 €
              <span className='text-xs text-gray-500'>/ 200 000 mi </span>
            </p>
        </a>
  );
};

export { ProductCard };