import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import { Slide } from '../../types/homePage-types';
import { Container } from '../Container/Container';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SwiperSplash.scss';

interface Props {
  slides?: Slide;
  children: ReactNode;
}

export const SwiperSplash = ({ children }: Props) => {
  const settings = {
    dots: true, // Wyświetla kropki nawigacyjne
    infinite: true, // Nieskończone przewijanie
    speed: 500, // Prędkość przejścia między slajdami
    slidesToShow: 1, // Liczba wyświetlanych slajdów naraz
    slidesToScroll: 1, // Liczba slajdów przewijanych naraz
    arrows: true, // Wyświetla strzałki nawigacyjne
  };

  return (
    <section className='splash'>
      <Container className='container'>
        <Slider {...settings}>{children}</Slider>
      </Container>
    </section>
  );
};
