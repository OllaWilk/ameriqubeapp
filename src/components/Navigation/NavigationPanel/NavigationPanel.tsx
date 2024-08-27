import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLinkType, ProductLink } from '../../../types/navigation-types';
import { Dropdown } from '../../Dropdown/Dropdown';
import { RenderNavLinks } from '../RenderNavLinks/RenderNavLinks';
import { ButtonNavBar } from '../../Buttons';
import styles from './NavigationPanel.module.scss';

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

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);

  return (
    <ul className={`${styles.navigationList} ${className}`}>
      {navLinks.map(({ label, path }, index) => {
        const isDropdown = !path;
        return (
          <li
            key={index}
            className={`${isDropdown ? styles.dropLink : styles.link} ${
              dropdownVisible && isDropdown ? styles.activeDropdown : ''
            }`}
          >
            {isDropdown ? (
              <>
                <ButtonNavBar label={label} onClick={toggleDropdown} />
                {dropdownVisible && <Dropdown productLinks={productLinks} />}
              </>
            ) : (
              <RenderNavLinks label={label} path={path} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export { NavigationPanel };
