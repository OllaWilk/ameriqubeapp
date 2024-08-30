import React from 'react';
import styles from './ContactBanner.module.scss';
import { ButtonBlack, SectionHeader } from '../../components';
import { Container } from '../Container/Container';

export const ContactBanner = () => {
  return (
    <section className={styles.banner}>
      <Container>
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>Have Any Questions ?</p>
          <SectionHeader
            className={styles.title}
            text={`Don't Hesitate to Contact Us Any Time.`}
          />
        </div>
        <div className={styles.buttonContainer}>
          <ButtonBlack text='CONTACT US' to='/contact' />
        </div>
      </Container>
    </section>
  );
};
