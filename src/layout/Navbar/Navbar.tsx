import React from 'react';
import { Container } from '../index';
import { NavigationPanel, Logo, LocalizedPanel } from '../../components/index';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.navigation}>
          <NavigationPanel />
          <LocalizedPanel />
        </div>
      </Container>
    </header>
  );
};

export { Navbar };
