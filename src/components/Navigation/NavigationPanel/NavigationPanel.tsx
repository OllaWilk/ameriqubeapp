import React, { FC, useState } from 'react';
import { Dropdown } from '../../Dropdown/Dropdown';
import { RenderNavLinks } from '../RenderNavLinks/RenderNavLinks';
import { ButtonNavBar } from '../../Buttons';
import styles from './NavigationPanel.module.scss';
import { useTranslation } from 'react-i18next';
import { NavLinkType, ProductLink } from '../../../types/navigation-types';

interface NavigationPanelProps {
  className?: string;
}

const NavigationPanel: FC<NavigationPanelProps> = ({ className }) => {
  const { t } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navLinks: NavLinkType[] = t('navigation.navLinks', {
    returnObjects: true,
  });
  const productLinks: ProductLink[] = t('navigation.productLinks', {
    returnObjects: true,
  });

  return (
    <ul className={`${styles.navigationList} ${className}`}>
      {navLinks.map(({ label, path }, index) => (
        <li
          key={`${index}-${label}`}
          className={`${!path ? styles.dropLink : styles.link} ${
            dropdownVisible && !path
              ? styles.activeDropdown
              : styles.backgroundColor
          }`}
        >
          {!path ? (
            <ButtonNavBar
              label={label}
              onClick={() => setDropdownVisible((prev) => !prev)}
            />
          ) : (
            <RenderNavLinks label={label} path={path} />
          )}

          {!path && dropdownVisible && <Dropdown productLinks={productLinks} />}
        </li>
      ))}
    </ul>
  );
};

export { NavigationPanel };
