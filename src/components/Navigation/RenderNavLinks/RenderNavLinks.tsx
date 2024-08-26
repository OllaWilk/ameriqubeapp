import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkType } from '../../../types/navigation-types';
import styles from './RenderNavLinks.module.scss';

const RenderNavLinks = ({ label, path }: NavLinkType) => {
  return path ? (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.linkActive}` : styles.link
      }
    >
      {label}
    </NavLink>
  ) : null;
};

export { RenderNavLinks };
