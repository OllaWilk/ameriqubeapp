import React, { ReactNode, FC } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export { Container };
