import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { photos } from '../../img';
import styles from './NavigationPanel.module.scss';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'PRODUCTS & SERVICES', path: '/products-services' },
  { label: 'CONTACT', path: '/contact' },
];

const productLinks = [
  {
    label: 'IceQube',
    path: '/products-services/iceqube',
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

const NavigationPanel = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className={styles.navigationList}>
      {navLinks.map(({ label, path }, index) => (
        <div key={`${index}-${label}`} className={styles.navItem}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={
              label === 'PRODUCTS & SERVICES' ? toggleDropdown : undefined
            }
          >
            {label}
          </NavLink>
          {label === 'PRODUCTS & SERVICES' && isDropdownVisible && (
            <div className={styles.dropdownMenu}>
              {productLinks.map(({ label, path, logo, description }, idx) => (
                <NavLink
                  key={`${idx}-${label}`}
                  to={path}
                  className={styles.dropdownLink}
                >
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
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export { NavigationPanel };
