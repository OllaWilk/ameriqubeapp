import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonRed.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
  to?: string;
}

export const ButtonRed: FC<Props> = ({ text, onClick, to }) => {
  return to ? (
    <Link to={to} className={styles.buttonRed}>
      {text}
    </Link>
  ) : (
    <button className={styles.buttonRed} onClick={onClick}>
      {text}
    </button>
  );
};
