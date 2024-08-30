import React from 'react';
import { Container } from '../Container/Container';
import {
  LineOrnament,
  SplashHeading,
  SplashSubHeading,
} from '../../components';
import styles from './TextSplash.module.scss';

export const TextSplash = () => (
  <section className={styles.splash}>
    <Container className={styles.wrap}>
      <SplashHeading />
      <LineOrnament />
      <SplashSubHeading />
    </Container>
  </section>
);
