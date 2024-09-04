import React from 'react';
import { GlobalPartnerType } from '../../types/contactPage-Types';
import { partnersLogo } from '../../img/partnersLogo';
import { countryImages } from '../../img/maps';
import { LineOrnament } from '../LineOrnament/LineOrnament';
import { Subtitle } from '../Typography';
import { ContactDetail } from '../ContactDetail/ContactDetail';
import styles from './Partner.module.scss';

interface Props {
  partner: GlobalPartnerType;
}

export const Partner = ({ partner }: Props) => {
  const countryKey = partner.country as keyof typeof countryImages;
  const logoKey = partner.companyName as keyof typeof partnersLogo;

  return (
    <>
      <Subtitle text={partner.country} className={styles.titles} />
      <div className={styles.distributorInfo}>
        <div className={styles.map}>
          <img
            src={countryImages[countryKey]}
            alt='Region map'
            className={styles.mapImage}
          />
        </div>
        <div className={styles.details}>
          <Subtitle text={partner.companyName} className={styles.partnerName} />
          <img
            src={partnersLogo[logoKey]}
            alt={`${partner.companyName} Logo`}
          />
          <div className={styles.contact}>
            <ContactDetail label={partner.contactName} />
            <ContactDetail label='Position' value={partner.title} />
            <ContactDetail label='Address' value={partner.address} />
            <ContactDetail label='Tel/fax' value={partner.phone} />
            <ContactDetail label='Cel' value={partner.cell} />
            <ContactDetail label='Fax' value={partner.fax} />
            <ContactDetail label='Email' value={partner.email} />
            <ContactDetail label='Website' value={partner.website} isLink />
          </div>
        </div>
      </div>
      <LineOrnament className={styles.ornament} />
    </>
  );
};
