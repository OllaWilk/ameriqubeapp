import React from 'react';
import { UnderConstruction } from '../UnderConstruction/UnderConstruction';
import styles from './NotFoundPage.module.scss';
import { Container } from '../../layout';

export const NotFoundPage = () => (
  <>
    <div className={styles.blackBackground}></div>
    <div className={styles.notFound}>
      <Container>
        <h3 className={styles.error}>Ooops... 404</h3>
      </Container>
      <UnderConstruction />;
    </div>
  </>
);
