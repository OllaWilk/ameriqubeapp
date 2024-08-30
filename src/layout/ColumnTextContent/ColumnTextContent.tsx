import React, { FC, ReactNode } from 'react';
import styles from './ColumnTextContent.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

export const ColumnTextContent: FC<Props> = ({ children }) => {
  return <article className={styles.textContainer}>{children}</article>;
};
