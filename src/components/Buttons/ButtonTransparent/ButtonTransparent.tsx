import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonTransparent.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
  to?: string;
}

export const ButtonTransparent: FC<Props> = ({ text, onClick, to }) => {
  return to ? (
    <Link to={to} className={styles.buttonTransparent}>
      {text}
    </Link>
  ) : (
    <button className={styles.buttonTransparent} onClick={onClick}>
      {text}
    </button>
  );
};
