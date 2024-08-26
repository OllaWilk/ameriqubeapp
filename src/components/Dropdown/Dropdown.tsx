import React from 'react';
import { ProductLink } from '../../types/navigation-types';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  productLinks: ProductLink[];
}

const Dropdown = ({ productLinks }: DropdownProps) => (
  <ul className={styles.dropdownMenu}>
    {productLinks.map(
      ({ label, path, logo, description }, idx) =>
        path && (
          <li key={idx} className={styles.dropdownLink}>
            <a href={path} className={styles.link}>
              <img
                src={logo}
                alt={`${label} logo`}
                className={styles.dropdownLogo}
              />
              <div>
                <strong>{label}</strong>
                <p className={styles.description}>{description}</p>
              </div>
            </a>
          </li>
        )
    )}
  </ul>
);

export { Dropdown };
