import React from 'react'
// import * as Yup from 'yup';
import { Field, FormikProvider, useFormik } from 'formik';
import InputField from '../inputField/inputField';
import { useTranslation } from 'next-i18next';
import DropDown from '../formComponents/Dropdown';
import SelectInputs from '../formComponents/SelectInputs';
import RadioButtonGroup from '../formComponents/RadioButtonGroup';
import PhoneNumber from '../formComponents/PhoneNumber';

interface IProps {
  categories: string[];
  subcategories: string[];
  subcategory: string;
  category: string;
}

const CategoriesProduct = ({ categories, subcategories, subcategory, category }: IProps) => {
  const { t } = useTranslation();
  const options = ['Продам', 'Куплю','Сдаю посуточно','Сдаю помесячно','Сниму','Меняю' ]

  const formik = useFormik({
    initialValues: {
      category,
      subcategory
    },
    onSubmit:() => {}
  });


  return (
    <FormikProvider value={formik}>

      <form onSubmit={formik.handleSubmit}>
        <Field name="category" id="category" label={t('forms.category')} component={InputField} />
        <Field name="subcategory" id="subcategory" label={t('forms.subcategory')} component={InputField} />
        <DropDown required onSelect={() => {}} label='categories' values={categories} selected={formik.values.category} />
        <DropDown onSelect={() => {}} label='subcategories' values={subcategories} selected={formik.values.subcategory} />
        <SelectInputs formik={formik} valueKey={'options'} options={['Сканер отпечатка пальца', 'USB Type-C', '5G', 'Поддержка карт памяти']} type="checkbox" />
        <RadioButtonGroup formik={formik} formikKey="radio-btn-selected" options={options} />
        <PhoneNumber/>
      </form>
    </FormikProvider>
  )
}

export default CategoriesProduct