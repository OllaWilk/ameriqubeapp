import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Container } from '../Container/Container';
import { ButtonChat, Logo } from '../../components';
import { isoImg } from '../../img/images/iso';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topFooter}>
          <nav className={styles.nav}>
            <Link to='/' className={styles.link}>
              Home
            </Link>
            <Link to='/about' className={styles.link}>
              About
            </Link>
            <Link to='/products' className={styles.link}>
              Products & Services
            </Link>
            <Link to='/contact' className={styles.link}>
              Contact
            </Link>
          </nav>
          <div className={styles.address}>
            <Logo />
            <p>
              141 Wilson Avenue
              <br />
              Greensburg, PA 15601
            </p>
          </div>
        </div>
        <div className={styles.certifications}>
          {Object.entries(isoImg).map(([key, src], index) => (
            <img key={key} src={src} alt={`Certification ${index + 1}`} />
          ))}
        </div>
        <div className={styles.bottomFooter}>
          <p>ISO 9001:2015 Certificate Number: 017884</p>
          <p>&copy; 2024 AMERIqube. All Rights Reserved</p>
          <Link to='/privacy' className={styles.legalLink}>
            Privacy & Legal
          </Link>
        </div>
        <ButtonChat />
      </Container>
    </footer>
  );
};
