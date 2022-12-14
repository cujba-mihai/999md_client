'use client';
import React from 'react';

interface IBtn {
    btnText: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isSubmit?: boolean;
    onClick?: (e: any) => void;
    type?: 'primary' | 'success' | 'ghost';
    customClass?: string;
  }
const Button = ({
    btnText,
    isLoading=false,
    isDisabled=false,
    isSubmit=false,
    type="primary",
    onClick,
    customClass="" 
}: IBtn) => {
    
 return (
    <button 
    className={`button-${type} ${customClass}`} 
    type={isSubmit ? 'submit' : 'button'}
    onClick={onClick}
    disabled={isDisabled}
    >
        {isLoading ? <span>Loading...</span> : <span className="button-text"> {btnText} </span>}
    </button>
    )
};

export default Button;
