import React from 'react';
import styles from './SplashHeading.module.scss';

interface Props {
  text: string | undefined;
}

export const SplashHeading = ({ text }: Props) => {
  return <h2 className={styles.mainHeading}>{text}</h2>;
};
