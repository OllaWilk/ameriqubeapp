import React from 'react';
import {
  AmeriQubeWelcome,
  ContactBanner,
  ProductsSection,
  SwiperSplash,
  SwiperSplashHome,
} from '../../layout';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.main}>
      <SwiperSplashHome />
      <AmeriQubeWelcome />
      <ProductsSection />
      <ContactBanner />
      <SwiperSplash className={styles.iceQubeProducts}>
        <p>dd</p>
      </SwiperSplash>
    </div>
  );
};
