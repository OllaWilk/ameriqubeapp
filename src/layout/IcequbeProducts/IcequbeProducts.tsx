import React from 'react';
import { ProductCarouselItem } from '../../types/homePage-types';
import { SwiperSplash } from '../SwiperSplash/SwiperSplash';
import { useTranslation } from 'react-i18next';
import img from '../../img/images/icequbeProducts/iq2000i-700px-600x634.png';
import {
  ButtonRed,
  LineOrnament,
  LogoText,
  Paragraph,
  SectionHeader,
  Subtitle,
} from '../../components';
import { ColumnTextContent } from '../ColumnTextContent/ColumnTextContent';
import styles from './IcequbeProducts.module.scss';

export const IcequbeProducts = () => {
  const { t } = useTranslation();

  const products: ProductCarouselItem[] = t('pages.home.productsCarousel', {
    returnObjects: true,
  });

  return (
    <>
      <SwiperSplash className={styles.iceQubeProducts}>
        {products.map((product) => (
          <section key={product.title} className={styles.section}>
            <section>
              <LogoText src={img} />
              <ColumnTextContent>
                <Subtitle text={'ICEqube'} className={styles.subtitle} />
                <SectionHeader text={product.title} />
                <LineOrnament className={styles.ornament} />
                <Paragraph text={product.description} />
                <ButtonRed
                  text={product.button.text}
                  to={product.button.link}
                />
              </ColumnTextContent>
            </section>
          </section>
        ))}
      </SwiperSplash>
    </>
  );
};
