import React, { FC } from 'react';
import styles from './ButtonBlack.module.scss';

interface Props {
  text: string;
  onClick: () => void;
}

const ButtonBlack: FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.buttonBlack} onClick={onClick}>
      {text}
    </button>
  );
};

export { ButtonBlack };
