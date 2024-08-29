import React, { ReactNode, FC } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);
