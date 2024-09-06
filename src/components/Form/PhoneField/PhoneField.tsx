import React from 'react';
import { ErrorMessage } from 'formik';
import { FieldProps } from '../../../types/contactPage-types';
import PhoneInput from 'react-phone-input-2';
import styles from './PhoneField.module.scss';

interface PhoneFieldProps extends FieldProps {
  country: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

export const PhoneField = ({
  name,
  placeholder,
  country,
  setFieldValue,
  error,
  touched,
}: PhoneFieldProps) => (
  <div className={styles.inputContent}>
    <ErrorMessage name={name} component='div' />
    <PhoneInput
      country={country}
      inputProps={{
        name,
        placeholder,
        required: true,
        className: `${error && touched ? styles.inputError : ''}`,
      }}
      onChange={(value) => setFieldValue(name, value)}
    />
  </div>
);
