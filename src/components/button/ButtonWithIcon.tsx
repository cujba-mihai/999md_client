import React from 'react';
import style from './Button.module.scss';
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
    className={`${style[`button-${type}-${iconPosition}`]} ${customClass}`} 
    onClick={onClick}
    >
        <Image 
        className={style[`button-icon-${iconPosition}`]}
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
