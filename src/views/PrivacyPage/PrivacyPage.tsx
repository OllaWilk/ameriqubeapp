import React from 'react';
import { Container, TextSplash } from '../../layout';
import { PrivacyLegacyCard } from '../../components';

import styles from './PrivacyPage.module.scss';
import { PrivacyPageSection } from '../../types/privacyLegacyPAge-types';
import { useTranslation } from 'react-i18next';

export const PrivacyPage = () => {
  const { t } = useTranslation();

  const header: string = t('pages.privacy.title');

  const documents: PrivacyPageSection[] = t('pages.privacy.sections', {
    returnObjects: true,
  });

  return (
    <>
      <TextSplash splashHeading={header} />
      <Container>
        <section className={styles.section}>
          <div className={styles.documnts}>
            {documents.map((document, key) => (
              <PrivacyLegacyCard
                title={document.title}
                description={document.description}
                downloadLink={document.downloadLink}
                url={document.url}
                btnTExt={document.btnText}
                key={document.title}
              />
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};
