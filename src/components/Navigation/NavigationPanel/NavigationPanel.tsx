import React, { FC, useCallback, useState } from 'react';
import { photos } from '../../../img';
import { Dropdown } from '../../Dropdown/Dropdown';
import { RenderNavLinks } from '../RenderNavLinks/RenderNavLinks';
import { NavLinkType, ProductLink } from '../../../types/navigation-types';
import { ButtonNavBar } from '../../Buttons';
import styles from './NavigationPanel.module.scss';

const navLinks: NavLinkType[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PRODUCTS & SERVICES', path: null },
  { label: 'CONTACT', path: '/contact' },
];

const productLinks: ProductLink[] = [
  {
    label: 'IceQube',
    path: 'https://iceqube.com',
    logo: photos.icequbeLogo,
    description:
      'Ice qube supplies a wide range of high quality climate control products. the offer includes air conditioners for zones I and II, industrial air conditioners and specialized air conditioning solutions. Iceqube air conditioners are characterized by exceptional reliability. They meet high industry requirements and provide precise temperature and humidity control in various work environments.',
  },
  {
    label: 'SmartQube',
    path: 'https://smartqube.com',
    logo: photos.smartqubeLogo,
    description:
      'Smartqube offers a comprehensive range of services, from equipment maintenance, calibration, and troubleshooting. using iceqube solutions, we design innovative solutions tailored to the changing needs of various industries. additionally, as a distributor in europe, smartqube facilitates seamless access to cutting-edge solutions, enabling businesses to thrive in an ever-changing landscape.',
  },
];

interface NavigationPanelProps {
  className?: string;
}

const NavigationPanel: FC<NavigationPanelProps> = ({ className }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleToggleDropdown = useCallback((label: string) => {
    label === 'PRODUCTS & SERVICES' &&
      setDropdownVisible((prevState) => !prevState);
  }, []);

  return (
    <ul className={`${styles.navigationList} ${className}`}>
      {navLinks.map(({ label, path }, index) => (
        <li
          key={`${index}-${label}`}
          className={`${
            label === 'PRODUCTS & SERVICES' ? styles.dropLink : styles.link
          } ${
            dropdownVisible && label === 'PRODUCTS & SERVICES'
              ? styles.activeDropdown
              : styles.backgroundColor
          }`}
          onClick={() => handleToggleDropdown(label)}
        >
          {label === 'PRODUCTS & SERVICES' ? (
            <ButtonNavBar label={label} />
          ) : (
            <RenderNavLinks label={label} path={path} />
          )}

          {label === 'PRODUCTS & SERVICES' && dropdownVisible && (
            <Dropdown productLinks={productLinks} />
          )}
        </li>
      ))}
    </ul>
  );
};

export { NavigationPanel };
