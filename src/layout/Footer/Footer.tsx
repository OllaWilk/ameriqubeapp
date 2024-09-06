import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Container } from '../Container/Container';
import { Logo } from '../../components';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.topFooter}>
          {/* <nav className={styles.nav}>
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
          </nav> */}
          <div className={styles.address}>
            <Logo />
            <p>
              141 Wilson Avenue
              <br />
              Greensburg, PA 15601
            </p>
          </div>
        </div>
        {/* <div className={styles.certifications}>
          {/* Add the certifications images/logos here */}
        {/* <img src='/path-to-cert1' alt='Certification 1' /> */}
        {/* <img src='/path-to-cert2' alt='Certification 2' /> */}
        {/* Add more certification logos as necessary */}
        {/* </div> */}
        <div className={styles.bottomFooter}>
          <p>ISO 9001:2015 Certificate Number: 017884</p>
          <p>&copy; 2024 AMERIqube. All Rights Reserved</p>
          <Link to='/privacy' className={styles.legalLink}>
            Privacy & Legal
          </Link>
        </div>
      </Container>
    </footer>
  );
};
