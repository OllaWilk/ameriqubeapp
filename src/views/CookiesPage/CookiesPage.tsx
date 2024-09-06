import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ParagraphType } from '../../types/cookiesPage-types';
import { handleAcceptCookies, handleRemoveCookies } from '../../utils/cookie';
import { Container, TextSplash } from '../../layout';
import { ButtonBlack, Paragraph } from '../../components';
import styles from './CookiesPage.module.scss';

export const CookiesPage = () => {
  const [isAccepted, setIsAccepted] = useState(true);

  const { t } = useTranslation();

  const header: string = t('pages.cookiePolicy.title');
  const acceptButton: string = t('cookies.acceptButton.text');
  const revokeButton: string = t('cookies.revokeButton');
  const documents: ParagraphType[] = t('pages.cookiePolicy.paragraphs', {
    returnObjects: true,
  });

  const handleRemove = useCallback(() => {
    handleRemoveCookies();
    setIsAccepted(false);
  }, []);

  const handleAccept = useCallback(() => {
    handleAcceptCookies();
  }, []);

  return (
    <>
      <TextSplash splashHeading={header} />
      <Container>
        <section className={styles.section}>
          <div className={styles.documnts}>
            {documents.map((document, index) => (
              <Paragraph key={`paragraph-${index}`} text={document.content} />
            ))}
            {isAccepted ? (
              <ButtonBlack
                text={revokeButton}
                className={styles.button}
                onClick={handleRemove}
              />
            ) : (
              <ButtonBlack
                text={acceptButton}
                className={styles.button}
                onClick={handleAccept}
              />
            )}
          </div>
        </section>
      </Container>
    </>
  );
};
