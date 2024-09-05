import React from 'react';
import { Container, TextSplash } from '../../layout';
import { PrivacyLegacyCard } from '../../components';

import styles from './PrivacyPage.module.scss';

export const PrivacyPage = () => (
  <>
    <TextSplash splashHeading={'Legal Guidelines and Your Privacy'} />
    <Container>
      <section className={styles.section}>
        <div className={styles.documnts}>
          <PrivacyLegacyCard
            title='GDPR'
            description='Our dedication to data protection and compliance with the General Data Protection Regulation'
            downloadLink='/lorem'
            btnTExt='Download PDF (English)'
          />
          <PrivacyLegacyCard
            title='Privacy Policy'
            description='Privacy Policy - Discover our commitment to privacy and learn how we protect your personal information'
            downloadLink='/lorem'
            btnTExt='Download PDF (English)'
          />
          <PrivacyLegacyCard
            title='Cookie Policy'
            description='Cookie Policy - Gain insights into our approach to cookies and manage your preferences by engaging with our comprehensive guide'
            url='/cookies'
            btnTExt='Explore Cookie Policy'
          />
        </div>
      </section>
    </Container>
  </>
);
