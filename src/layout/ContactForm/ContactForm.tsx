import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactFormType } from '../../types/contactPage-types';
import { Container } from '../Container/Container';
import { FormComponent, SectionHeader } from '../../components';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const { t } = useTranslation();

  const formContent: ContactFormType = t('pages.contact.contactForm', {
    returnObjects: true,
  });

  return (
    <section className={styles.background}>
      <Container>
        <SectionHeader className={styles.title} text={formContent.title} />
        <FormComponent />
        <p className={styles.info}>{formContent.requiredFieldsInfo}</p>
      </Container>
    </section>
  );
};
