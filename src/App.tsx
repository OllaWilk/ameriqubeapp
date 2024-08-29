import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Navbar } from './layout';
import { photos } from './img';
import styles from './App.module.scss';

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
