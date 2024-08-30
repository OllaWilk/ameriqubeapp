import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from '../Container/Container';
import {
  LineOrnament,
  SplashHeading,
  SplashSubHeading,
} from '../../components';
import './SwiperSplash.scss';
import { Button } from '../../types/homePage-types';

interface Props {
  slides: [];
  title: string;
  intro: string;
  buttonRed: Button;
  buttonTransparent?: Button;
}
export const SwiperSplash = ({ slides }: Props) => {
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
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className='slide'>
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
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};
