import React from 'react';
import { NavLink } from 'react-router-dom';
import { ProductLink } from '../../types/navigation-types';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  productLinks: ProductLink[];
}

const Dropdown = ({ productLinks }: DropdownProps) => {
  return (
    <div className={styles.dropdownMenu}>
      {productLinks.map(
        ({ label, path, logo, description }, idx) =>
          path && (
            <li key={idx}>
              <NavLink to={path} className={styles.dropdownLink}>
                <img
                  src={logo}
                  alt={`${label} logo`}
                  className={styles.dropdownLogo}
                />
                <div>
                  <strong>{label}</strong>
                  <p className={styles.description}>{description}</p>
                </div>
              </NavLink>
            </li>
          )
      )}
    </div>
  );
};

export { Dropdown };
