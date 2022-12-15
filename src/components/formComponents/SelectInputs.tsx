import React, { useEffect, useState } from 'react'

interface ISelectInputs {
    options: string[];
    type: 'checkbox' | 'radio',
    onSelect?: () => void;
    formik: any;
    valueKey: string;
};

interface ICheckbox {
    option: string;
    handleOnChange: any;
    checked: boolean;
}


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

interface ICheckedState {
    name: string;
    checked: boolean;
}

type TCheckedState = ICheckedState[];

const SelectInputs =  ({ formik, valueKey, options }: ISelectInputs) => {
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
    <div>
        {
            checkedState.map((option: {name: string; checked: boolean;}, index: number) => (
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