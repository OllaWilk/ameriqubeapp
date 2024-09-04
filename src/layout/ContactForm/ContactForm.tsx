import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import * as Yup from 'yup';

import { ButtonBlack, SectionHeader } from '../../components';
import { Container } from '../Container/Container';
import styles from './ContactForm.module.scss';

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

const validationSchema = Yup.object({
  name: Yup.string().required('Imię jest wymagane'),
  phoneNumber: Yup.string().required('Numer telefonu jest wymagany'),
  companyName: Yup.string().required('Nazwa firmy jest wymagana'),
  jobPosition: Yup.string().required('Stanowisko jest wymagane'),
  email: Yup.string()
    .email('Nieprawidłowy adres email')
    .required('Email jest wymagany'),
  message: Yup.string().required('Wiadomość jest wymagana'),
  over18: Yup.bool().oneOf([true], 'Musisz mieć ukończone 18 lat'),
  agreeProcessing1: Yup.bool().oneOf(
    [true],
    'Musisz wyrazić zgodę na przetwarzanie danych'
  ),
  agreeProcessing2: Yup.bool().oneOf(
    [true],
    'Musisz wyrazić zgodę na przetwarzanie danych zgodnie z RODO'
  ),
});

export const ContactForm: FC = () => {
  return (
    <section className={styles.background}>
      <Container>
        <SectionHeader
          className={styles.title}
          text="Don't hesitate to contact us any time."
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            alert('Formularz wysłany pomyślnie!');
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
                    placeholder='Wpisz swoje imię i nazwisko *'
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
                      placeholder: 'Wpisz swój telefon',
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
                    placeholder='Wpisz nazwę firmy *'
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
                    placeholder='Wpisz swoje stanowisko *'
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
                    placeholder='Wpisz swój email *'
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
                  placeholder='Wpisz swoją wiadomość'
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
                    <label htmlFor='over18'>
                      Oświadczam, że mam ukończone 18 lat *
                    </label>
                  </div>
                </div>

                <div
                  className={`${styles.checkboxContent} ${
                    errors.agreeProcessing1 && touched.agreeProcessing1
                      ? styles.inputError
                      : ''
                  }`}
                >
                  {' '}
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
                      Wyrażam zgodę na przetwarzanie moich danych osobowych
                      przez AMERIqube dla celów związanych z usługami
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
                      Wyrażam zgodę na przetwarzanie moich danych osobowych
                      zgodnie z RODO
                    </label>
                  </div>
                </div>
              </div>
              <ButtonBlack
                text='wyślij'
                type='submit'
                className={styles.buttonSubmit}
              />
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};
