import React from 'react';
import { Container, SwiperSplash } from '../../layout';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';
import { useTranslation } from 'react-i18next';
import { HomeSwiper } from '../../types/homePage-types';

export const HomePage = () => {
  const { t } = useTranslation();

  const slides: HomeSwiper[] = t('pages.home.swiper', {
    returnObjects: true,
  });

  return (
    <>
      <SwiperSplash slides={slides} />
      <Container>
        <UnderConstruction />
      </Container>
    </>
  );
};
