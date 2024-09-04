import React from 'react';
import { Product } from '../../types/homePage-types';
import { photos } from '../../img';
import { useTranslation } from 'react-i18next';
import { Container } from '../Container/Container';
import { Card, LogoText } from '../../components';
import styles from './ProductsSection.module.scss';

export const ProductsSection = () => {
  const { t } = useTranslation();

  const icequbeLogo = photos.icequbeLogo;
  const SMARTqube = photos.smartqubeLogo;

  const products: Product[] = t('pages.home.products', {
    returnObjects: true,
  });

  return (
    <section className={styles.productSection}>
      <Container className={styles.container}>
        {products.map((product: Product, index: number) => (
          <div key={index} className={styles.productCart}>
            <LogoText
              className={styles.logo}
              src={product.logo === 'icequbeLogo' ? icequbeLogo : SMARTqube}
              alt={`${t(
                `welcome.productsSection.products[${index}].title`
              )} Logo`}
            />
            <Card
              title={product.title}
              description={product.description}
              buttonText={product.button.text}
              buttonUrl={product.button.link}
            />
          </div>
        ))}
      </Container>
    </section>
  );
};
