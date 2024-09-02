import React from 'react';
import styles from './LogoText.module.scss';

interface Props {
  src: string;
  className?: string;
}

export const LogoText = ({ src, className }: Props) => (
  <div className={`${styles.logoContainer} ${className}`}>
    <img src={src} alt='Ameriqube Logo' className={styles.logo} />
  </div>
);
