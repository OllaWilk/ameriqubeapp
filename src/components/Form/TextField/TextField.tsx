import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { FieldProps } from '../../../types/contactPage-types';
import styles from './TextField.module.scss';

export const TextField = ({
  name,
  placeholder,
  error,
  touched,
  type = 'text',
}: FieldProps & { type?: string }) => (
  <div className={styles.inputContent}>
    <ErrorMessage name={name} component='div' />
    <Field
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={error && touched ? styles.inputError : ''}
    />
  </div>
);
