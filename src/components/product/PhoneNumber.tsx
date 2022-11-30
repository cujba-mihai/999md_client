'use client';
import React, {useState, useEffect, useCallback} from "react";
import ButtonWithIcon from "../button/ButtonWithIcon";
import style from './Product.module.scss';

const productDetails = {
    contacts: '+373 68 123456',
};

const PhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState('+373 78 ********');
    const togglePhNumber = useCallback(() => {
        setPhoneNumber((number) => {
          if(number.includes('*')) {
            return productDetails.contacts;
          } 
    
          const arr = phoneNumber.split(' ');
          arr[arr.length - 1] = '*'.repeat(9);
    
          return arr.join(' ');
        })
      }, [phoneNumber])

      useEffect(() => {
        togglePhNumber();
      }, [])
    return (
        <>
                  {
            productDetails.contacts && (
              <>
              <div className={style['region-container']}>
                  <span className={style['region-label']}>Contacte: </span>
                  <span className={style["region-value"]}>{
                  /\*/.test(phoneNumber) 
                  ? (phoneNumber.replace(/\*/g, '') && (Array.from(phoneNumber).map(num => {
                    if(num === '*') {
                      return <i className={style['phone-number-star']} key={`${Math.random()}-${new Date().getTime()}`}></i>
                    } else {
                      return null;
                    }
                  })))
                  : phoneNumber
                  }</span>
                </div>

              <ButtonWithIcon src='view-number.svg'  btnText={`${/\*/.test(phoneNumber) ? 'Arată' : 'Ascunde'} numărul`} onClick={togglePhNumber} />

              </>
            )
          }
        </>
    )
}

export default PhoneNumber;