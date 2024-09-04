import React, { FC, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useTranslation } from 'react-i18next';
import { NavLinkType, ProductLink } from '../../../types/navigation-types';
import { RenderNavLinks } from '../RenderNavLinks/RenderNavLinks';
import { ButtonNavBar } from '../../Buttons';
import { Dropdown } from '../../Dropdown/Dropdown';
import styles from './SideNavigation.module.scss';

interface SideNavigationProps {
  className?: string;
}

export const SideNavigation: FC<SideNavigationProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navLinks: NavLinkType[] = t('navigation.navLinks', {
    returnObjects: true,
  });
  const productLinks: ProductLink[] = t('navigation.productLinks', {
    returnObjects: true,
  });

  const handleDropdownToggle = (path: string | null) => {
    if (!path) {
      setDropdownVisible((prev) => !prev);
    }
  };

  return (
    <div className={`${styles.sideNavigationWrapper} ${className}`}>
      <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
      <nav className={`${styles.sideNavigation} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navigationList}>
          {navLinks.map(({ label, path }, index) => (
            <li
              key={`${index}-${label}`}
              className={`${!path ? styles.dropLink : styles.link} ${
                dropdownVisible && !path
                  ? styles.activeDropdown
                  : styles.backgroundColor
              }`}
              onClick={() => handleDropdownToggle(path)}
            >
              {!path ? (
                <ButtonNavBar label={label} />
              ) : (
                <RenderNavLinks label={label} path={path} />
              )}

              {!path && dropdownVisible && (
                <Dropdown
                  productLinks={productLinks}
                  urlContact={'/contact'}
                  name={'contact'}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
