import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Map, TextSplash } from '../../layout';
import styles from './ContactPage.module.scss';
import { ContactType } from '../../types/contactPage-Types';

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
            <Map
              usaAddress={contact.usaAddress}
              europeAddress={contact.europeAddress}
            />
          </div>
        </Container>
      </div>
    </>
  );
};
