import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactBannerType } from '../../types/aboutPage-types';
import { ButtonBlack, SectionHeader } from '../../components';
import { Container } from '../Container/Container';
import styles from './ContactBanner.module.scss';

export const ContactBanner = () => {
  const { t } = useTranslation();

  const contactBanner: ContactBannerType = t('contactBanner', {
    returnObjects: true,
  });
  const { title, subtitle, button, to } = contactBanner;

  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>{subtitle}</p>
          <SectionHeader className={styles.title} text={`${title}`} />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonBlack text={button} to={`/${to}`} />
        </div>
      </Container>
    </section>
  );
};
