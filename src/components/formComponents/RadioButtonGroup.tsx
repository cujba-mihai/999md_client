import { IRadioButton, IRadioBtnGroup, IRadioBtnSelectState } from '@/types/form-components';
import React, { useState } from 'react'
import TextTranslate from '../typography/TextTranslate';

export const RadioButton = ({ label, onChange, selected }: IRadioButton) => (
  <label style={{marginRight: '40px'}} className=''> 
    <input type="radio" name="offer_type" value={label} checked={selected.label === label} onChange={onChange} />
    <TextTranslate tag='span' value={label} /> 
  </label>
);

const RadioButtonGroup = ({ formik, formikKey, options }: IRadioBtnGroup) => {
  const [ selected, setSelected ] = useState<IRadioBtnSelectState>({ label: null, checked: false });

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

    setSelected({
      label: event.target.value,
      checked: true
    })
    
    formik.setFieldValue(formikKey, selected.label);
  };



  return (
    <div>
      {
        options.map((option, index) => <RadioButton onChange={handleSelect} selected={selected} label={option}  key={`${option}-${index}`} />)
      }
    </div>
  )
}

export default RadioButtonGroup