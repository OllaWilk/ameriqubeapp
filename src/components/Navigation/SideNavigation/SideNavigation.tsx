import React, { FC } from 'react';
import styles from './SideNavigation.module.scss';

interface SideNavigationProps {
  className?: string;
}

const SideNavigation: FC<SideNavigationProps> = ({ className }) => {
  return (
    <div className={`${styles.sideList} ${className}`}>
      <p>hamburger</p>
    </div>
  );
};

export { SideNavigation };
