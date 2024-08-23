import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Navbar } from './layout';
import { photos } from './img';
import styles from './App.module.scss';

function App() {
  const { t } = useTranslation();

  return (
    <Container>
      <img
        className={styles.img}
        src={photos.ameriqubeText}
        alt='Ameriqube Logo'
      />
      <h1 className={styles.title}>{t('welcome')}</h1>
      <p className={styles.subtitle}>
        We apologize, but the site is temporarily under construction.
      </p>
      <Navbar />
    </Container>
  );
}

export default App;
