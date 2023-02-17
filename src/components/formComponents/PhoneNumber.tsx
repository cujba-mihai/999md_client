import React, { useState } from 'react'
import Button from '../button/Button';
import DropDown from './Dropdown'
import style from './PhoneNumber.module.scss';

const PhoneNumber = () => {
  const [ phoneNumber, setPhoneNumber ] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if(/[^0-9]/g.test(value)) return;

    
    setPhoneNumber(event.target.value);
  }

  return (
    <div className={style['phone-number-container']}>

      <DropDown label='country' onSelect={() => {}} selected='' values={['Moldova (+373)', 'France (+33)']} />

      <label htmlFor={`phone-number-input-${Date.now()}`}>
        <span>Phone number</span>
        <input id={`phone-number-input-${Date.now()}`} type="tel"  onChange={handleInputChange} value={phoneNumber} className={style['phone-number-input']}/>
      </label>

      <Button btnText='dobavit' type='primary' />


      <Button btnText='cancel' type='ghost' />

    </div>
  )
}

export default PhoneNumber