import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonBlack.module.scss';

interface Props {
  text: string;
  onClick?: () => void;
  to?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  className?: string;
}

const ButtonBlack: FC<Props> = ({ text, onClick, to, type, className }) => {
  return to ? (
    <Link to={to} className={styles.buttonBlack}>
      {text}
    </Link>
  ) : (
    <button
      className={`${styles.buttonBlack} ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export { ButtonBlack };
