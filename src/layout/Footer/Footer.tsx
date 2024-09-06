import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../Container/Container';
import {
  ButtonChat,
  FooterNavigation,
  IsoImg,
  Logo,
  Paragraph,
} from '../../components';
import styles from './Footer.module.scss';

export const Footer = () => {
  const { t } = useTranslation();

  const chat: string = t('contactBanner.chat');
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topFooter}>
          <FooterNavigation />
          <div className={styles.address}>
            <Logo />
            <p>
              141 Wilson Avenue
              <br />
              Greensburg, PA 15601
            </p>
          </div>
        </div>
        <IsoImg />
        <div className={styles.bottomFooter}>
          <Paragraph text='ISO 9001:2015 Certificate Number: 017884' />
          <Paragraph text='&copy; 2024 AMERIqube. All Rights Reserved' />
          <Link to='/privacy' className={styles.legalLink}>
            Privacy & Legal
          </Link>
        </div>
        <ButtonChat text={chat} />
      </Container>
    </footer>
  );
};
