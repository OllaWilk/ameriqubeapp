import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { FieldProps } from '../../../types/contactPage-Types';
import styles from './TextField.module.scss';

export const TextField = ({
  name,
  placeholder,
  error,
  touched,
  type = 'text',
}: FieldProps & { type?: string }) => (
  <div
    className={`${styles.inputContent} ${
      error && touched ? styles.inputError : ''
    }`}
  >
    <ErrorMessage name={name} component='div' />
    <Field id={name} name={name} type={type} placeholder={placeholder} />
  </div>
);
