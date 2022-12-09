import React from 'react';
import Image from 'next/image';

interface IBtnWithIcon {
    src: string;
    btnText: string;
    onClick: () => void;
    iconW?: number;
    iconH?: number;
    iconPosition?: 'start' | 'end';
    type?: 'primary';
    customClass?: string;
  }
const ButtonWithIcon = ({
    src,
    iconW = 20,
    iconH = 20,
    iconPosition = 'start',
    btnText,
    type="primary",
    customClass="",
    onClick 
}: IBtnWithIcon) => {
    
 return (
    <button 
    className={`icon-button-${iconPosition} button-${type} ${customClass}`} 
    onClick={onClick}
    >
        <Image 
        src={require(`@/public/assets/${src}`).default.src} 
        width={iconW} 
        height={iconH} 
        alt={btnText}
        />
        <span className="button-text"> {btnText} </span>
    </button>
    )
};

export default ButtonWithIcon;
