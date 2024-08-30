import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
  to?: string;
}

const ButtonBlack: FC<Props> = ({ text, onClick, to }) => {
  return to ? (
    <Link to={to} className={styles.buttonBlack}>
      {text}
    </Link>
  ) : (
    <button className={styles.buttonBlack} onClick={onClick}>
      {text}
    </button>
  );
};

export { ButtonBlack };
