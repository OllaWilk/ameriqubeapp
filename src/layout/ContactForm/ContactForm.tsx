import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import { ButtonBlack, SectionHeader } from '../../components';
import styles from './ContactForm.module.scss';
import 'react-phone-input-2/lib/style.css';
import {
  ContactFormType,
  ContactFormValidation,
  FormDataType,
} from '../../types/contactPage-Types';

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

export const ContactForm: FC = () => {
  const { t } = useTranslation();

  const validation: ContactFormValidation = t(
    'pages.contact.contactForm.validation',
    {
      returnObjects: true,
    }
  );

  const formContent: ContactFormType = t('pages.contact.contactForm', {
    returnObjects: true,
  });

  console.log(formContent);

  const validationSchema = Yup.object({
    name: Yup.string().required(`${validation.nameRequired}`),
    phoneNumber: Yup.string().required(`${validation.phoneNumberRequired}`),
    companyName: Yup.string().required(`${validation.companyNameRequired}`),
    jobPosition: Yup.string().required(`${validation.jobPositionRequired}`),
    email: Yup.string()
      .email(`${validation.invalidEmail}`)
      .required(`${validation.emailRequired}`),
    message: Yup.string().required(`${validation.messageRequired}`),
    over18: Yup.bool().oneOf([true], `${validation.over18Required}`),
    agreeProcessing1: Yup.bool().oneOf(
      [true],
      `${validation.agreeProcessing1Required}`
    ),
    agreeProcessing2: Yup.bool().oneOf(
      [true],
      `${validation.agreeProcessing2Required}`
    ),
  });

  return (
    <section className={styles.background}>
      <Container>
        <SectionHeader className={styles.title} text={formContent.title} />
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
                <div
                  className={`${styles.inputContent} ${
                    errors.name && touched.name ? styles.inputError : ''
                  }`}
                >
                  <ErrorMessage name='name' component='div' />
                  <Field
                    id='name'
                    name='name'
                    type='text'
                    placeholder={formContent.namePlaceholder}
                  />
                </div>
                <div
                  className={`${styles.inputContent} ${
                    errors.phoneNumber && touched.phoneNumber
                      ? styles.inputError
                      : ''
                  }`}
                >
                  <ErrorMessage name='phoneNumber' component='div' />
                  <PhoneInput
                    country={'us'}
                    value={initialValues.phoneNumber}
                    inputProps={{
                      placeholder: `${formContent.phonePlaceholder}`,
                      name: 'phoneNumber',
                      required: true,
                      className: `${
                        errors.phoneNumber && touched.phoneNumber
                          ? styles.inputError
                          : 'phoneInput'
                      }`,
                    }}
                    onChange={(value) => setFieldValue('phoneNumber', value)}
                  />
                </div>
                <div
                  className={`${styles.inputContent} ${
                    errors.companyName && touched.companyName
                      ? styles.inputError
                      : ''
                  }`}
                >
                  <ErrorMessage name='companyName' component='div' />
                  <Field
                    id='companyName'
                    name='companyName'
                    type='text'
                    placeholder={formContent.companyNamePlaceholder}
                  />
                </div>

                <div
                  className={`${styles.inputContent} ${
                    errors.jobPosition && touched.jobPosition
                      ? styles.inputError
                      : ''
                  }`}
                >
                  <ErrorMessage name='jobPosition' component='div' />
                  <Field
                    id='jobPosition'
                    name='jobPosition'
                    type='text'
                    placeholder={formContent.jobPositionPlaceholder}
                  />
                </div>

                <div
                  className={`${styles.inputContent} ${
                    errors.email && touched.email ? styles.inputError : ''
                  }`}
                >
                  <ErrorMessage name='email' component='div' />
                  <Field
                    id='email'
                    name='email'
                    type='email'
                    placeholder={formContent.emailPlaceholder}
                  />
                </div>
              </div>
              <div
                className={`${styles.textareaWrap} ${
                  errors.message && touched.message ? styles.inputError : ''
                }`}
              >
                <ErrorMessage name='message' component='div' />
                <Field
                  id='message'
                  name='message'
                  as='textarea'
                  placeholder={formContent.messagePlaceholder}
                />
              </div>
              <div className={styles.checkboxesWrap}>
                <div
                  className={`${styles.checkboxContent} ${
                    errors.over18 && touched.over18 ? styles.inputError : ''
                  }`}
                >
                  <div>
                    <ErrorMessage
                      name='over18'
                      component='div'
                      className={styles.errorMessage}
                    />
                    <Field type='checkbox' id='over18' name='over18' />
                    <label htmlFor='over18'>{formContent.over18Label}</label>
                  </div>
                </div>

                <div
                  className={`${styles.checkboxContent} ${
                    errors.agreeProcessing1 && touched.agreeProcessing1
                      ? styles.inputError
                      : ''
                  }`}
                >
                  <ErrorMessage
                    name='agreeProcessing1'
                    component='div'
                    className={styles.errorMessage}
                  />
                  <div>
                    <Field
                      type='checkbox'
                      id='agreeProcessing1'
                      name='agreeProcessing1'
                    />
                    <label htmlFor='agreeProcessing1'>
                      {formContent.agreeProcessing1Label}
                    </label>
                  </div>
                </div>

                <div
                  className={`${styles.checkboxContent} ${
                    errors.agreeProcessing2 && touched.agreeProcessing2
                      ? styles.inputError
                      : ''
                  }`}
                >
                  <ErrorMessage
                    name='agreeProcessing2'
                    component='div'
                    className={styles.errorMessage}
                  />
                  <div>
                    <Field
                      type='checkbox'
                      id='agreeProcessing2'
                      name='agreeProcessing2'
                    />
                    <label htmlFor='agreeProcessing2'>
                      {formContent.agreeProcessing2Label}
                    </label>
                  </div>
                </div>
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
        <p className={styles.info}>{formContent.requiredFieldsInfo}</p>
      </Container>
    </section>
  );
};
