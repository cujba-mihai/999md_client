import React, { useState } from 'react'

interface ISelectInputs {
    options: string[];
    type: 'checkbox' | 'radio',
    onSelect?: () => void;
};

interface ICheckbox {
    option: string;
    index: number;
    setSelectedOptions: (args?: any) => void;
}


const Checkbox = ({ option, index, setSelectedOptions }: ICheckbox) => {
    const identifier = `${option}-${index}`;
    const [ checked, setChecked ] = useState(false);

    const clickHandler = () => {
        setChecked(prev => !prev);

        if(checked) setSelectedOptions((prev: string[]) => ([...prev.slice(0, index), option, ...prev.slice(index, prev.length + 1)]));
        if(!checked) setSelectedOptions((prev: string[]) => prev.filter(( optionSelect ) => optionSelect !== option));

        return option;
    };
    
    return (
        <label key={identifier} htmlFor={identifier}>
            <input
                value={option}
                onChange={clickHandler}
                type="checkbox"
                checked={checked}
                id={identifier} 
            />
            <span>{option}</span>
        </label>
    )
}

const SelectInputs = ({ options }: ISelectInputs) => {
  const [ selectedOptions, setSelectedOptions ] = useState([]);

  console.log('SELECTED OPTIONS: ', selectedOptions);

  return (
    <div>
        {
            options.map((option: string, index: number) => (
                <Checkbox 
                    index={index} 
                    option={option} 
                    setSelectedOptions={setSelectedOptions} 
                    key={`${option}-${index}`} 
                />
            ))
        }
    </div>
  )
}

export default SelectInputs