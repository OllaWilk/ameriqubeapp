import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, GlobalPartner, Map, TextSplash } from '../../layout';
import { ContactType } from '../../types/contactPage-Types';
import { LineOrnament, SectionHeader } from '../../components';
import styles from './ContactPage.module.scss';

export const ContactPage = () => {
  const { t } = useTranslation();

  const contact: ContactType = t('pages.contact', {
    returnObjects: true,
  });

  return (
    <>
      <TextSplash
        splashHeading={contact.splashHeading}
        splashHeader={contact.splashHeader}
        className={styles.splash}
      />
      <div className={styles.imgBakground}>
        <Container>
          <div className={styles.contactPage}>
            <SectionHeader text={contact.mapTitle} className={styles.header} />
            <LineOrnament className={styles.ornament} />
            <Map
              usaAddress={contact.usaAddress}
              europeAddress={contact.europeAddress}
            />
            <GlobalPartner />
          </div>
        </Container>
      </div>
    </>
  );
};
