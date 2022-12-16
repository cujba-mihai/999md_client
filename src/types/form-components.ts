export interface IDropDownProps {
    values: string[];
    selected: string;
    label: string;
    required?: boolean;
    onSelect: () => void;
}

export interface ISelectInputs {
    options: string[];
    type: 'checkbox' | 'radio',
    onSelect?: () => void;
    formik: any;
    valueKey: string;
    row?: boolean;
    className?: string;
};

export interface ICheckbox {
    option: string;
    handleOnChange: any;
    checked: boolean;
}

export interface ICheckedState {
    name: string;
    checked: boolean;
}

export type TCheckedState = ICheckedState[];
 
export interface IRadioBtnSelectState {
    label: string | null;
    checked: boolean;
  };
  
export interface IRadioButton {
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selected: IRadioBtnSelectState;
  }
  
export interface IRadioBtnGroup {
    options: string[];
    formik: any;
    formikKey: string;
  }