import { useDebounce } from '@/hooks/useDebounce';
import React, { MutableRefObject, useEffect, useRef } from 'react'

interface ISelectInputs {
    options: string[];
    type: 'checkbox' | 'radio',
    onSelect?: () => void;
    formik: any;
    valueKey: string;
};

interface ICheckbox {
    option: string;
    index: number;
    handleOnChange: any;
    checkedState: boolean[];
}


export const Checkbox = ({option, index, checkedState, handleOnChange}: ICheckbox): JSX.Element => (
    <label key={`${index}-${option}`} htmlFor={`${index}-${option}`}>
        <input
        key={`${index}-${option}`}
        type="checkbox"
        id={`custom-checkbox-${index}`}
        name={option}
        value={option}
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        />
        <span>{option}</span>
    </label>
)

const SelectInputs = ({ formik, valueKey, options }: ISelectInputs) => {
    const checkedState = useRef(new Array(options.length).fill(false));

    const handleOnChange = useDebounce((position: number) => {
        const updatedCheckedState = checkedState.current.map((item, index) => index === position ? !item : item);
      
        checkedState.current = updatedCheckedState;

        const getCheckedOptions = checkedState.current.reduce((result, checked, index) => {

            if(checked) result.push(options[index]);

            return result;
        }, [])

        
        formik.setFieldValue(valueKey, getCheckedOptions);

        console.log(formik.values);
        console.log(getCheckedOptions);
    }, 100)

    useEffect(() => {
        formik.setFieldValue(valueKey, []);  
    }, [])
      

  return (
    <div>
        {
            options.map((option: string, index: number) => (
                <Checkbox 
                    checkedState={checkedState} 
                    handleOnChange={handleOnChange} 
                    index={index} 
                    option={option} 
                    key={`${index}-${option}`} 
                />
            ))
        }
    </div>
  )
}

export default SelectInputs;