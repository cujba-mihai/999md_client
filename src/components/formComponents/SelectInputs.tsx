import { ICheckbox, ICheckedState, ISelectInputs, TCheckedState } from '@/types/form-components';
import React, { useEffect, useState } from 'react'

export const Checkbox = ({option, checked, handleOnChange}: ICheckbox): JSX.Element => (
    <label key={option} htmlFor={option}>
        <input
            key={option}
            type="checkbox"
            id={option}
            name={option}
            value={option}
            checked={checked}
            onChange={handleOnChange}
        />
        <span>{option}</span>
    </label>
)

const SelectInputs =  ({ formik, valueKey, options, row = false, className }: ISelectInputs) => {
    const [ checkedState, setCheckedState ] = useState<TCheckedState>([]);

    const handleOnChange =  (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState((prev) => prev.reduce((res: TCheckedState, val) => {
            if(val.name === ev.target.value) {
                res.push({...val, checked: !val.checked })
            } else {
                res.push(val);
            }

            return res;
        }, []))

    };

    useEffect(() => {
        setCheckedState(options.map(option => ({name: option, checked: false})));
        formik.setFieldValue(valueKey, []);  
    }, [])

    useEffect(() => {
        formik.setFieldValue(valueKey, checkedState);  
    }, [checkedState])
      

  return (
    <div style={{ display: 'flex', flexDirection: row ? 'row' : 'column', flexWrap: 'wrap' }} className={className}>
        {
            checkedState.map((option: ICheckedState, index: number) => (
                <Checkbox 
                    handleOnChange={handleOnChange} 
                    checked={option.checked}
                    option={option.name} 
                    key={`${index}-${option}`} 
                />
            ))
        }
    </div>
  )
}

export default SelectInputs;