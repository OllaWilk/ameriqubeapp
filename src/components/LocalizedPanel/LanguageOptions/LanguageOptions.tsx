import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguagesType } from '../../../types/navigation-types';
import { useLanguageAndRegionCookie } from '../../../utils/useLanguageAndRegionCookie';
import { DropdownToggleButton } from '../../index';
import { OptionItem } from '../OptionItem/OptionItem';
import styles from '../DropdownOptions.module.scss';

export const LanguageOptions = () => {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguageAndRegionCookie();
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languages: LanguagesType[] = t('languages', { returnObjects: true });

  const handleLanguageChange = (language: LanguagesType) => {
    changeLanguage(language);
    setLanguageDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownToggleButton
        label={language.toUpperCase()}
        onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
      />
      {isLanguageDropdownOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((language) => (
            <OptionItem<LanguagesType>
              key={language}
              onSelect={handleLanguageChange}
              select={language}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
