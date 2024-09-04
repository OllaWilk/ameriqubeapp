import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import { Container } from '../Container/Container';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SwiperSplash.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const SwiperSplash = ({ children, className }: Props) => {
  const settings = {
    dots: true, // Displays navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Speed of slide transitions
    slidesToShow: 1, // Number of slides shown at once
    slidesToScroll: 1, // Number of slides scrolled at a time
    arrows: true, // Displays navigation arrows
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 7000, // Time between slide changes (8000 ms = 8 seconds)
  };

  return (
    <section className={`splash ${className}`}>
      <Container className='container'>
        <Slider {...settings}>{children}</Slider>
      </Container>
    </section>
  );
};
