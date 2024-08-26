import React from 'react';
import { Link } from 'react-router-dom';
import { photos } from '../../img';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to='/home'>
      <h1 className={styles.logo}>
        <img src={photos.ameriqube} alt='ameri qube logo' />
      </h1>
    </Link>
  );
};

export { Logo };
