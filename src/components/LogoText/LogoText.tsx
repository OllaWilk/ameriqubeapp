import React from 'react';
import styles from './LogoText.module.scss';

interface Props {
  src: string;
}

export const LogoText = ({ src }: Props) => (
  <div className={styles.logoContainer}>
    <img src={src} alt='Ameriqube Logo' className={styles.logo} />
  </div>
);
