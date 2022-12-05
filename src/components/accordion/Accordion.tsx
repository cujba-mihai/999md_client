'use client';
import React, { useState } from 'react';
import Image from '../Image';
import style from './Accordion.module.scss';

interface IAccordion {
    title: string;
    content?: string;
    Component?: JSX.Element;
  }
  const Accordion = ({ title, content, Component }: IAccordion) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
        <div>
      <div className={style["accordion-item"]}>
        <div className={style["accordion-title"]} onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div className={style[`accordion-toggle-el-${isActive ? 'up' : 'down'}`]}>
            <Image
            alt='chevron-down'
            src='chevron-down.svg'
            height={6}
            width={10}
            />
          </div>
        </div>
      </div>
      <div className={style[`accordion-content-${isActive ? 'show' : 'hide'}`]}>{content || Component || null}</div>
      </div>
    );
  };
  
  export default Accordion;