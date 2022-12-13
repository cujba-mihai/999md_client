import CategoriesAdd from '@/components/advertising/CategoriesAdd';
import CategoriesProduct from '@/components/advertising/CategoriesProduct';
import { categories, subcategories } from '@/components/advertising/dummyData';
import SubcategoriesAdd from '@/components/advertising/SubcategoriesAdd';
import { FormikProvider, useFormik } from 'formik';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Add = () => {
  const query = useSearchParams();

  const [ showSubcategory, setShowSubcategory ] = useState<string | null>(null);
  const [ showCategory, setShowCategory ] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      category: showSubcategory,
      subcategory: showCategory
    },
    onSubmit:() => {}
  });


  const getCategories = () => ({
    subcategory: query.get('subcategory'),
    category: query.get('category')
  })

  useEffect(() => {
    const { subcategory, category } = getCategories();

    setShowSubcategory(() => subcategory);
    setShowCategory(() => category);

  }, [query])

  return (
    <FormikProvider value={formik}>
      {
        !showCategory && !showSubcategory && <CategoriesAdd />
      }

      {
        showCategory && !showSubcategory && <SubcategoriesAdd />
      }

      {
        showCategory && showSubcategory && 
          <CategoriesProduct 
            formik={formik}
            subcategories={subcategories.map(sub => sub.name)} 
            categories={categories.map(category => category.name)} 
          />
      }
    </FormikProvider>
  )
}

Add.withLayout = true;

export default Add