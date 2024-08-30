import React from 'react';
import { photos } from '../../img';
import styles from './LogoText.module.scss';

export const LogoText = () => (
  <div className={styles.logoContainer}>
    <img
      src={photos.ameriqubeText}
      alt='Ameriqube Logo'
      className={styles.logo}
    />
  </div>
);
