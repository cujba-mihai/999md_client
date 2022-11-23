import React from 'react';
import style from './Button.module.scss';

interface IBtn {
    btnText: string;
    onClick: () => void;
    type?: 'primary' | 'success';
  }
const Button = ({
    btnText,
    type="primary",
    onClick 
}: IBtn) => {
    
 return (
    <button 
    className={style[`button-${type}`]} 
    onClick={onClick}
    >
        <span className="button-text"> {btnText} </span>
    </button>
    )
};

export default Button;
