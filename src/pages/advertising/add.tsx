import CategoriesAdd from '@/components/advertising/CategoriesAdd';
import CategoriesProduct from '@/components/advertising/CategoriesProduct';
import SubcategoriesAdd from '@/components/advertising/SubcategoriesAdd';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Add = () => {
  const query = useSearchParams();

  const [ showSubcategory, setShowSubcategory ] = useState<string | null>(null);
  const [ showCategory, setShowCategory ] = useState<string | null>(null);


  useEffect(() => {
    const subcategory = query.get('subcategory');
    const category = query.get('category');

    setShowSubcategory(() => subcategory);
    setShowCategory(() => category);

  }, [query])

  return (
    <>
    {
       !showCategory && !showSubcategory && <CategoriesAdd />
    }

    {
       showCategory && !showSubcategory && <SubcategoriesAdd />
    }

    {
       showCategory && showSubcategory && <CategoriesProduct />
    }

    </>
  )
}

Add.withLayout = true;

export default Add