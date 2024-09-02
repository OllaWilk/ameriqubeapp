import React from 'react';
import { Container, ColumnTextContent } from '../index';
import { photos } from '../../img';
import { useTranslation } from 'react-i18next';
import { Welcome } from '../../types/homePage-types';
import { ButtonRedText, LogoText, Paragraph, Subtitle } from '../../components';
import styles from './AmeriQubeWelcome.module.scss';

export const AmeriQubeWelcome = () => {
  const { t } = useTranslation();

  const welcome: Welcome = t('pages.home.welcome', {
    returnObjects: true,
  });

  return (
    <section className={styles.welcomeSection}>
      <Container>
        <div className={styles.content}>
          <ColumnTextContent>
            <Subtitle text={welcome.sectionTitle} className={styles.subtitle} />
            <LogoText src={photos.ameriqubeText} className={styles.logo} />
            <Paragraph className={styles.text} text={welcome.introParagraph} />
          </ColumnTextContent>
          <div className={styles.additional}>
            {welcome.additionalParagraphs.map((paragraph, index) => (
              <Paragraph
                key={index}
                className={styles.paragraph}
                text={paragraph}
              />
            ))}
            <ButtonRedText
              to={welcome.button.link}
              text={welcome.button.text}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
