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
  className?: string;
}

export const TextSplash = ({
  splashHeader,
  splashHeading,
  className,
}: Props) => (
  <section className={`${styles.splash} ${className}`}>
    <Container className={styles.wrap}>
      <SplashHeading text={splashHeading} />
      <LineOrnament />
      <SplashSubHeading text={splashHeader} />
    </Container>
  </section>
);
