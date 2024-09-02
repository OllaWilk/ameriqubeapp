import React, { ReactNode } from 'react';
import styles from './BackgroundSquare.module.scss';

interface Props {
  children: ReactNode;
}

export const BackgroundSquare = ({ children }: Props) => (
  <div className={styles.backgroundImage}>{children}</div>
);
