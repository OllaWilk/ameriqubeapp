import React from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  interface ButtonProps {
    color: string;
  }

  const ColorButton = styled.button<ButtonProps>`
  background-color: ${({ color }: ButtonProps) => color};
`;

  return (
    <nav className={styles.buttonWrap}>
      <ColorButton color='#1E3A8A' onClick={() => handleLanguageChange('en')}>
        English
      </ColorButton>
      <ColorButton color='#E31C34' onClick={() => handleLanguageChange('pl')}>
        Polski
      </ColorButton>
    </nav>
  );
};

export { Navbar };
