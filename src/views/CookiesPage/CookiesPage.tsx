import React from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphType } from '../../types/cookiesPage-types';
import { Container, TextSplash } from '../../layout';
import { ButtonBlack, Paragraph } from '../../components';
import styles from './CookiesPage.module.scss';

export const CookiesPage = () => {
  const { t } = useTranslation();

  const header: string = t('pages.cookiePolicy.title');
  const button: string = t('pages.cookiePolicy.button');
  const documents: ParagraphType[] = t('pages.cookiePolicy.paragraphs', {
    returnObjects: true,
  });

  return (
    <>
      <TextSplash splashHeading={header} />
      <Container>
        <section className={styles.section}>
          <div className={styles.documnts}>
            {documents.map((document, index) => (
              <Paragraph key={`paragraph-${index}`} text={document.content} />
            ))}
            <ButtonBlack text={button} className={styles.button} />
          </div>
        </section>
      </Container>
    </>
  );
};
