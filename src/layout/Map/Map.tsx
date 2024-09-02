import React from 'react';
import { photos } from '../../img';
import styles from './Map.module.scss';

export const Map = () => (
  <>
    <div className={styles.imgWrap}>
      <img alt={'world map'} src={photos.worldMap} />
    </div>
    <div className={styles.addressWrap}>
      <div className={styles.usa}>
        <div className={styles.usaAdress}>
          <p>141 Wilson Avenue </p>
          <p>Greensburg, PA 15601</p>
        </div>
      </div>
      <div className={styles.europe}>
        <div className={styles.europeAdress}>
          <p>ul. Rakietowa 29E </p>
          <p>51-311 Wrocław, Poland</p>
        </div>
      </div>
    </div>
  </>
);
