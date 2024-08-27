import React from 'react';
import { Container } from '../index';
import {
  NavigationPanel,
  Logo,
  LocalizedPanel,
  SideNavigation,
} from '../../components/index';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <header className={styles.navbar}>
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

export { Navbar };
