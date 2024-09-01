import React from 'react';
import { Container, SwiperSplash } from '../../layout';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';
import { useTranslation } from 'react-i18next';
import { Slide } from '../../types/homePage-types';
import {
  LineOrnament,
  SplashHeading,
  SplashSubHeading,
} from '../../components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { t } = useTranslation();

  const slides: Slide[] = t('pages.home.swiper', {
    returnObjects: true,
  });

  return (
    <>
      <SwiperSplash>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <SplashHeading text={slide.title} />
            <LineOrnament />
            <SplashSubHeading text={slide.intro} />

            <div className='buttons'>
              <a href={slide.buttonRed[0]} className='button-red'>
                {slide.buttonRed[1]}
              </a>
              {slide.buttonTransparent && (
                <a
                  href={slide.buttonTransparent[0]}
                  className='button-transparent'
                >
                  {slide.buttonTransparent[1]}
                </a>
              )}
            </div>
            <p>{slide.title}</p>
          </div>
        ))}
      </SwiperSplash>
      <Container>
        <UnderConstruction />
      </Container>
    </>
  );
};
