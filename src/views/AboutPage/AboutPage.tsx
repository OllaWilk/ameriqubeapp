import React from 'react';
import { Container } from '../../layout';
import styles from './AboutPage.module.scss';
import {
  SplashHeading,
  LineOrnament,
  SplashSubHeading,
} from '../../components/index';

export const AboutPage = () => {
  return (
    <section className={styles.splash}>
      <Container className={styles.carouselWrap}>
        <SplashHeading />
        <LineOrnament />
        <SplashSubHeading />
      </Container>
    </section>
  );
};
