import React from 'react'
// import * as Yup from 'yup';
import { Field } from 'formik';
import InputField from '../inputField/inputField';
import { useTranslation } from 'next-i18next';
import DropDown from '../formComponents/Dropdown';
import SelectInputs from '../formComponents/SelectInputs';

interface IProps {
  formik: any;
  categories: string[];
  subcategories: string[];
}

const CategoriesProduct = ({ categories, subcategories, formik }: IProps) => {
  const { t } = useTranslation();

  return (
      <form onSubmit={formik.handleSubmit}>
        <Field name="category" id="category" label={t('forms.category')} component={InputField} />
        <Field name="subcategory" id="subcategory" label={t('forms.subcategory')} component={InputField} />
        <DropDown required onSelect={() => {}} label='categories' values={categories} selected={formik.values.category} />
        <DropDown onSelect={() => {}} label='subcategories' values={subcategories} selected={formik.values.subcategory} />
        <SelectInputs formik={formik} valueKey={'options'} options={['Сканер отпечатка пальца', 'USB Type-C', '5G', 'Поддержка карт памяти']} type="checkbox" />
      </form>
  )
}

export default CategoriesProduct