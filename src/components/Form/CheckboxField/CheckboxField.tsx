import React from 'react';
import { CheckboxProps } from '../../../types/contactPage-types';
import { ErrorMessage, Field } from 'formik';

import styles from './CheckboxField.module.scss';

export const CheckboxField = ({
  name,
  label,
  error,
  touched,
}: CheckboxProps) => (
  <div
    className={`${styles.checkboxContent} ${
      error && touched ? styles.inputError : ''
    }`}
  >
    <ErrorMessage name={name} component='div' className={styles.errorMessage} />
    <div
      className={`${styles.checkboxWrapper} ${
        error && touched ? styles.inputError : ''
      }`}
    >
      <Field type='checkbox' id={name} name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  </div>
);
