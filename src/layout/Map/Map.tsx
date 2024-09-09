import React from 'react';
import { AddressType } from '../../types/contactPage-types';
import { photos } from '../../img';
import styles from './Map.module.scss';

interface MapProps {
  usaAddress: AddressType;
  europeAddress: AddressType;
}

export const Map = ({ usaAddress, europeAddress }: MapProps) => (
  <section className={styles.mapPositoiner}>
    <div className={styles.mapImageWrapper}>
      <img alt={'world map'} src={photos.worldMap} />
    </div>
    <div className={styles.addressWrapper}>
      <div className={`${styles.addressMarker} ${styles.usa}`}>
        <div className={`${styles.addressDetails} ${styles.usaDetails}`}>
          <p>{usaAddress.line1}</p>
          <p>{usaAddress.line2}</p>
        </div>
      </div>
      <div className={`${styles.addressMarker} ${styles.europe}`}>
        <div className={`${styles.addressDetails} ${styles.europeDetails}`}>
          <p>{europeAddress.line1}</p>
          <p>{europeAddress.line2}</p>
        </div>
      </div>
    </div>
    <div>
      <div className={styles.smallDevicesAdres}>
        <div>
          <h3>USA</h3>
          <p>{usaAddress.line1}</p>
          <p>{usaAddress.line2}</p>
        </div>
        <div>
          <div>
            <h3>Poland / European Union </h3>
            <p>{europeAddress.line1}</p>
            <p>{europeAddress.line2}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
