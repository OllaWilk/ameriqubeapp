import React from 'react';
import { isoImg } from '../../img/images/iso';
import styles from './IsoImg.module.scss';

export const IsoImg = () => {
  return (
    <div className={styles.certifications}>
      {Object.entries(isoImg).map(([key, src], index) => (
        <img key={key} src={src} alt={`Certification ${index + 1}`} />
      ))}
    </div>
  );
};
