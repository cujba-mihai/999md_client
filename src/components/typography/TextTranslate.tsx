import React from 'react'
import { useTranslation } from 'react-i18next';
import { ITypographyTranslateProps } from './type';


const TextTranslate = ({ value, className, tag }: ITypographyTranslateProps) => {
    const { t } = useTranslation();

    switch(tag) {
        case 'span':
            return  <span className={className}>{t(value)}</span>
        case 'p':
            return  <p className={className}>{t(value)}</p>
        case 'h1':
            return  <h1 className={className}>{t(value)}</h1>
        case 'h2':
            return  <h2 className={className}>{t(value)}</h2>
        case 'h3':
            return  <h3 className={className}>{t(value)}</h3>
    }
}

export default TextTranslate