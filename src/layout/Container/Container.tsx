import React, { ReactNode, FC } from 'react';
import style from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${style.container} ${className}`}>{children}</div>;
};

export { Container };
