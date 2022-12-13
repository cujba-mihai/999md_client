import { useClickOutside } from '@/hooks/useClickOutside';
import React, { useEffect, useRef, useState } from 'react';
import TextTranslate from '../typography/TextTranslate';
import styles from './Dropdown.module.scss';

interface IDropDownProps {
    values: string[];
    selected: string;
    label: string;
    required?: boolean;
    onSelect: () => void;
}

const DropDown: React.FC<IDropDownProps> = ({
    values,
    selected,
    label,
    onSelect,
    required = false
}: IDropDownProps): JSX.Element => {
  const [ showDropDown, setShowDropDown] = useState<boolean>(false);
  const [ selectedOption, setSelectedOption ] = useState(selected);
  const ref = useRef(null)
  
  const handleClickOutside = () => {
    setShowDropDown(false);
  };

  useClickOutside(ref, handleClickOutside);

  const onClickHandler = (value: string): void => {
    setSelectedOption(value);
    onSelect();
  };

  const togglePopper = () => {
    setShowDropDown(prev => !prev);
  }

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <div className={styles['dropdown-container']}>
      <div className={styles['dropdown-label']}>
        <TextTranslate tag='p' value={label} />
        {required && <span className={styles.required}>*</span>}
      </div>

      <div ref={ref} className={ `${showDropDown ? styles['select-active'] : styles.select} round`} onClick={togglePopper} >
        <TextTranslate tag='span' value={selectedOption} />
        <div className={`${styles.dropdown} ${showDropDown ? styles['dropdown-active'] : ''}`}>
          {values.map(
            (value: string, index: number): JSX.Element => {
              return (
                <p
                  key={index}
                  onClick={(): void => {
                    onClickHandler(value);
                  }}
                >
                  {value}
                </p>
              );
            }
          )}
        </div>
      </div>

    </div>
  );
};

export default DropDown;
