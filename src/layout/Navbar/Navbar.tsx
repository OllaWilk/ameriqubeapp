import React, { useState, useEffect } from 'react';
import { Container } from '../index';
import {
  NavigationPanel,
  Logo,
  LocalizedPanel,
  SideNavigation,
} from '../../components/index';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Container className={styles.container}>
        <Logo className={styles.logoLeft} />
        <nav className={styles.navigation}>
          <NavigationPanel className={styles.navigationPanel} />
          <LocalizedPanel className={styles.display} />
          <SideNavigation className={styles.sideNavigation} />
        </nav>
      </Container>
    </header>
  );
};
