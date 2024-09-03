import React from 'react';
import { GlobalPartnerType } from '../../types/contactPage-Types';
import { partnersLogo } from '../../img/partnersLogo';
import { countryImages } from '../../img/maps';
import styles from './Partner.module.scss';
import { LineOrnament } from '../LineOrnament/LineOrnament';
import { Paragraph, Subtitle } from '../Typography';

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
          <div className={styles.logo}>
            <img
              src={partnersLogo[logoKey]}
              alt={`${partner.companyName} Logo`}
            />
          </div>
          <div className={styles.contact}>
            <div className={styles.contactNameWrap}>
              <p className={styles.contactName}>{partner.contactName}</p>
              {partner.title && <Paragraph text={partner.title} />}
            </div>
            {partner.address && (
              <div className={styles.contactWrapColumn}>
                <div className={styles.contactWrap}>
                  <p>{partner.address}</p>
                </div>
              </div>
            )}
            {Array.isArray(partner.phone) ? (
              <div className={styles.contactWrapColumn}>
                <div className={styles.contactWrap}>
                  <p className={styles.contactName}>Tel/fax: </p>
                  <span>{partner.phone[0]}</span>
                </div>
                <div className={styles.contactWrap}>
                  <p className={styles.contactName}>Tel/fax: </p>
                  <span>{partner.phone[1]}</span>
                </div>
              </div>
            ) : (
              <div className={styles.contactWrap}>
                <p className={styles.contactName}>Tel/fax: </p>
                <span>{partner.phone}</span>
              </div>
            )}
            {partner.cell && (
              <div className={styles.contactWrap}>
                <p className={styles.contactName}>Cel: </p>
                <span>{partner.cell}</span>
              </div>
            )}
            {partner.fax && (
              <div className={styles.contactWrap}>
                <p className={styles.contactName}>Fax: </p>
                <span>{partner.fax}</span>
              </div>
            )}
            <div className={styles.contactWrap}>
              <p className={styles.contactName}>Email: </p>
              <p>{partner.email}</p>
            </div>
            {partner.website && (
              <div className={styles.contactWrap}>
                <p className={styles.contactName}>Website: </p>
                <a
                  href={partner.website}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {partner.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <LineOrnament className={styles.ornament} />
    </>
  );
};
