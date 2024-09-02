import React from 'react';
import { Container, SwiperSplash } from '../../layout';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';
import { useTranslation } from 'react-i18next';
import { Slide } from '../../types/homePage-types';
import {
  ButtonRed,
  ButtonTransparent,
  LineOrnament,
  Paragraph,
  SectionHeader,
} from '../../components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { t } = useTranslation();

  const slides: Slide[] = t('pages.home.swiper', {
    returnObjects: true,
  });

  return (
    <div className={styles.main}>
      <SwiperSplash className={styles.swiperSplash}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <SectionHeader
              text={slide.title}
              className={styles.sectionHeader}
            />
            <LineOrnament className={styles.ornament} />
            <Paragraph text={slide.intro} className={styles.paragraph} />
            <div className={styles.buttons}>
              <ButtonRed to={slide.buttonRed[0]} text={slide.buttonRed[1]} />
              {slide.buttonTransparent && (
                <ButtonTransparent
                  to={slide.buttonTransparent[0]}
                  text={slide.buttonTransparent[1]}
                />
              )}
            </div>
          </div>
        ))}
      </SwiperSplash>
      <Container>
        <UnderConstruction />
      </Container>
    </div>
  );
};
