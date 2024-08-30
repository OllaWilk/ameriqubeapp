import React from 'react';
import { useTranslation } from 'react-i18next';
import { photos } from '../../img';
import { Container } from '../../layout';
import styles from './UnderConstruction.module.scss';

export const UnderConstruction = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.main}>
      <Container>
        <img
          className={styles.img}
          src={photos.ameriqubeText}
          alt='Ameriqube Logo'
        />
        <h1 className={styles.title}>{t('welcome')}</h1>
        <p className={styles.subtitle}>{t('notFound')}</p>
      </Container>
    </div>
  );
};
