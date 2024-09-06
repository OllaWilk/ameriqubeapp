import React, { useState } from 'react';
import { NavLinkType, ProductLink } from '../../types/navigation-types';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './FooterNavigation.module.scss';

export const FooterNavigation = () => {
  const { t } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  const navLinks: NavLinkType[] = t('navigation.navLinks', {
    returnObjects: true,
  });

  const productLinks: ProductLink[] = t('navigation.productLinks', {
    returnObjects: true,
  });

  return (
    <nav className={styles.nav}>
      {navLinks.map(({ label, path }) => (
        <div key={`${label}`}>
          {!path ? (
            <>
              <p onClick={toggleDropdown} className={styles.link}>
                {label}
              </p>
              {dropdownVisible && (
                <div className={styles.dropdown}>
                  <Link
                    target='_blank'
                    to={`${productLinks[0].path}`}
                    className={styles.link}
                  >
                    {productLinks[0].label}
                  </Link>
                  <Link
                    target='_blank'
                    to={`${productLinks[1].path}`}
                    className={styles.link}
                  >
                    {productLinks[1].label}
                  </Link>
                </div>
              )}
            </>
          ) : (
            <Link to={path} className={styles.link}>
              {label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
