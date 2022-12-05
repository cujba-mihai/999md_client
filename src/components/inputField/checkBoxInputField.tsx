import React from 'react';
import { FieldProps } from 'formik';

type Props = FieldProps<string> & { label?: string };

const CheckboxInputField: React.FC<Props> = ({
  field,
  form: { touched, errors, setFieldValue, handleBlur },
  label,
}) => {
  return (
    <div style={{ margin: '10px 0', display: 'flex', flexDirection: 'column' }}>
        <span style={{display: 'flex', alignItems: 'center'}}>
            <input
                style={
                errors[field.name] && touched[field.name] && { borderColor: 'red', height: 'initial' } || undefined
                }
                name={field.name}
                //value={field.value}
                placeholder={label ? label : field.name}
                type={'checkbox'}
                value={field.value}
                onBlur={handleBlur}
                onChange={(element: React.FormEvent<HTMLInputElement>) =>
                setFieldValue(field.name, element.currentTarget.value)
                }
            />
            <span>{label}</span>
        </span>
      {touched[field.name] && errors[field.name] && (
        <span style={{ color: 'red' }}>{errors[field.name] as string}</span>
      )}
    </div>
  );
};

export default CheckboxInputField;
