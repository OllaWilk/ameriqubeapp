import React from 'react';
import { FieldProps } from '../../../types/contactPage-Types';
import { ErrorMessage, Field } from 'formik';
import styles from './TextAreaField.module.scss';

export const TextAreaField = ({
  name,
  placeholder,
  error,
  touched,
}: FieldProps) => (
  <div
    className={`${styles.textareaWrap} ${
      error && touched ? styles.inputError : ''
    }`}
  >
    <ErrorMessage name={name} component='div' />
    <Field id={name} name={name} as='textarea' placeholder={placeholder} />
  </div>
);
