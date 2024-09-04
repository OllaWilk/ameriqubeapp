import React from 'react';
import styles from './LogoText.module.scss';

interface Props {
  src: string;
  className?: string;
  alt?: string;
}

export const LogoText = ({ src, className, alt }: Props) => (
  <div className={`${styles.logoContainer} ${className}`}>
    <img src={src} alt={alt ? alt : 'Ameriqube Logo'} className={styles.logo} />
  </div>
);
