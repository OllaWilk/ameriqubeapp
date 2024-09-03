import React from 'react';
import {
  LineOrnament,
  Paragraph,
  Partner,
  SectionHeader,
} from '../../components';
import { GlobalPartnerType } from '../../types/contactPage-Types';
import { useTranslation } from 'react-i18next';
import styles from './GlobalPartner.module.scss';

export const GlobalPartner = () => {
  const { t } = useTranslation();

  const header: string = t('pages.contact.globalPartnerHeder');
  const paragraph: string = t('pages.contact.globalPArtnersParagraph');

  const partners: GlobalPartnerType[] = t('pages.contact.globalPartners', {
    returnObjects: true,
  });

  console.log(partners);

  return (
    <section className={styles.globalPartner}>
      <div className={styles.headerWrap}>
        <SectionHeader text={header} />
        <LineOrnament />
        <Paragraph text={paragraph} />
      </div>
      {partners.map((partner) => (
        <Partner key={partner.country} partner={partner} />
      ))}
    </section>
  );
};
