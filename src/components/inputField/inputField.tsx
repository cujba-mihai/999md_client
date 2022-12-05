import React from 'react';
import { FieldProps } from 'formik';

type Props = FieldProps<string> & { label?: string };

const InputField: React.FC<Props> = ({
  field,
  form: { touched, errors, setFieldValue, handleBlur },
  label,
}) => {
  return (
    <div style={{ margin: '10px 0', display: 'flex', flexDirection: 'column' }}>
      {
        //<label htmlFor={field.name}>{label}</label>
      }
      <input
        style={
          errors[field.name] && touched[field.name] && { borderColor: 'red' } || undefined
        }
        name={field.name}
        //value={field.value}
        placeholder={label ? label : field.name}
        type={
          field.name.includes('password')
            ? 'password'
            : field.name.includes('email')
            ? 'email'
            : 'text'
        }
        value={field.value}
        onBlur={handleBlur}
        onChange={(element: React.FormEvent<HTMLInputElement>) =>
          setFieldValue(field.name, element.currentTarget.value)
        }
      />
      {touched[field.name] && errors[field.name] && (
        <span style={{ color: 'red' }}>{errors[field.name] as string}</span>
      )}
    </div>
  );
};

export default InputField;
