import React from 'react';
import styles from './SplashSubHeading.module.scss';

interface Props {
  text: string | undefined;
}
export const SplashSubHeading = ({ text }: Props) => (
  <h3 className={styles.subHeading}>{text}</h3>
);
