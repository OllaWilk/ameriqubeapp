import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonRedText.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
  to?: string;
}

export const ButtonRedText: FC<Props> = ({ text, onClick, to }) => {
  return to ? (
    <Link to={to} className={styles.buttonRed} target='_blank'>
      {text}
    </Link>
  ) : (
    <button className={styles.buttonRed} onClick={onClick}>
      {text}
    </button>
  );
};
