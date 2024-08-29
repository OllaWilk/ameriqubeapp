import React from 'react';
import { Container } from '../../layout';
import {
  SplashHeading,
  LineOrnament,
  SplashSubHeading,
} from '../../components/index';
import styles from './AboutPage.module.scss';

export const AboutPage = () => {
  return (
    <section className={styles.about}>
      <Container className={styles.carouselWrap}>
        <SplashHeading />
        <LineOrnament />
        <SplashSubHeading />
      </Container>
    </section>
  );
};
