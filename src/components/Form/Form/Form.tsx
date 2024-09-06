import React from 'react';
import { getValidationSchema } from '../../../utils/formValidation';
import { Formik, Form } from 'formik';
import {
  ContactFormType,
  ContactFormValidation,
  FormDataType,
} from '../../../types/contactPage-types';
import { useTranslation } from 'react-i18next';
import { useRegion } from '../../../context/RegionContext';
import { TextField } from '../TextField/TextField';
import { PhoneField } from '../PhoneField/PhoneField';
import { TextAreaField } from '../TextAreaField/TextAreaField';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { Link } from 'react-router-dom';
import { ButtonBlack } from '../../Buttons';
import 'react-phone-input-2/lib/style.css';
import styles from './Form.module.scss';

export const FormComponent = () => {
  const { t } = useTranslation();
  const { region } = useRegion();

  const initialValues = {
    name: '',
    phoneNumber: '',
    companyName: '',
    jobPosition: '',
    email: '',
    message: '',
    over18: false,
    agreeProcessing1: false,
    agreeProcessing2: false,
  };

  const validation: ContactFormValidation = t(
    'pages.contact.contactForm.validation',
    {
      returnObjects: true,
    }
  );

  const validationSchema = getValidationSchema(validation);
  const formContent: ContactFormType = t('pages.contact.contactForm', {
    returnObjects: true,
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values: FormDataType) => {
        console.log(values);
        alert(formContent.submitSuccess);
      }}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className={styles.contactForm}>
          <div className={styles.inputsWrap}>
            <TextField
              name='name'
              placeholder={formContent.namePlaceholder}
              error={errors.name}
              touched={touched.name}
            />
            <PhoneField
              name='phoneNumber'
              placeholder={formContent.phonePlaceholder}
              country={region === 'USA' ? 'us' : 'pl'}
              setFieldValue={setFieldValue}
              error={errors.phoneNumber}
              touched={touched.phoneNumber}
            />
            <TextField
              name='companyName'
              placeholder={formContent.companyNamePlaceholder}
              error={errors.companyName}
              touched={touched.companyName}
            />
            <TextField
              name='jobPosition'
              placeholder={formContent.jobPositionPlaceholder}
              error={errors.jobPosition}
              touched={touched.jobPosition}
            />
            <TextField
              name='email'
              placeholder={formContent.emailPlaceholder}
              error={errors.email}
              touched={touched.email}
              type='email'
            />
          </div>
          <TextAreaField
            name='message'
            placeholder={formContent.messagePlaceholder}
            error={errors.message}
            touched={touched.message}
          />
          <div className={styles.checkboxesWrap}>
            <CheckboxField
              name='over18'
              label={formContent.over18Label}
              error={errors.over18}
              touched={touched.over18}
            />
            <CheckboxField
              name='agreeProcessing1'
              label={formContent.agreeProcessing1Label}
              error={errors.agreeProcessing1}
              touched={touched.agreeProcessing1}
            />
            <CheckboxField
              name='agreeProcessing2'
              label={formContent.agreeProcessing2Label}
              error={errors.agreeProcessing2}
              touched={touched.agreeProcessing2}
            />
          </div>
          <Link to={'/privacy'} className={styles.link}>
            {formContent.privacyLinkText}
          </Link>
          <ButtonBlack
            text={formContent.submitButton}
            type='submit'
            className={styles.buttonSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};
