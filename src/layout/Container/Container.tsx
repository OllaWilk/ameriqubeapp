import React, { ReactNode, FC } from 'react';
import style from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export { Container };
