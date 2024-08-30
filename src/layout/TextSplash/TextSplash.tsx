import React from 'react';
import { Container } from '../Container/Container';
import {
  LineOrnament,
  SplashHeading,
  SplashSubHeading,
} from '../../components';
import styles from './TextSplash.module.scss';

interface Props {
  splashHeader?: string;
  splashHeading?: string;
}

export const TextSplash = ({ splashHeader, splashHeading }: Props) => (
  <section className={styles.splash}>
    <Container className={styles.wrap}>
      <SplashHeading text={splashHeading} />
      <LineOrnament />
      <SplashSubHeading text={splashHeader} />
    </Container>
  </section>
);
