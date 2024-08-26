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
    path: '/iceqube.com',
    logo: photos.icequbeLogo,
    description:
      'ICE QUBE SUPPLIES A WIDE RANGE OF HIGH QUALITY CLIMATE CONTROL PRODUCTS. THE OFFER INCLUDES AIR CONDITIONERS FOR ZONES I AND II, INDUSTRIAL AIR CONDITIONERS AND SPECIALIZED AIR CONDITIONING SOLUTIONS. ICEQUBE AIR CONDITIONERS ARE CHARACTERIZED BY EXCEPTIONAL RELIABILITY. THEY MEET HIGH INDUSTRY REQUIREMENTS AND PROVIDE PRECISE TEMPERATURE AND HUMIDITY CONTROL IN VARIOUS WORK ENVIRONMENTS',
  },
  {
    label: 'SmartQube',
    path: '/products-services/smartqube',
    logo: photos.smartqubeLogo,
    description:
      'SMARTQUBE OFFERS A COMPREHENSIVE RANGE OF SERVICES, FROM EQUIPMENT MAINTENANCE, CALIBRATION, AND TROUBLESHOOTING. USING ICEQUBE SOLUTIONS, WE DESIGN INNOVATIVE SOLUTIONS TAILORED TO THE CHANGING NEEDS OF VARIOUS INDUSTRIES. ADDITIONALLY, AS A DISTRIBUTOR IN EUROPE, SMARTQUBE FACILITATES SEAMLESS ACCESS TO CUTTING-EDGE SOLUTIONS, ENABLING BUSINESSES TO THRIVE IN AN EVER-CHANGING LANDSCAPE.',
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
          className={
            label === 'PRODUCTS & SERVICES' ? styles.dropLink : styles.link
          }
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
