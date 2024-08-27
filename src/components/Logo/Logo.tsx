import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { photos } from '../../img';
import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link to='/home'>
      <h1 className={`${className} ${styles.logo}`}>
        <img src={photos.ameriqube} alt='ameri qube logo' />
      </h1>
    </Link>
  );
};

export { Logo };
