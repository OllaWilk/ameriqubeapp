import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguagesType } from '../../../types/navigation-types';
import { useLanguageAndRegionCookie } from '../../../utils/useLanguageAndRegionCookie';
import styles from '../DropdownOptions.module.scss';

const LanguageOptions = () => {
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
      <button
        className={styles.dropdownToggle}
        onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        {language.toUpperCase()}
      </button>
      {isLanguageDropdownOpen && (
        <ul className={styles.dropdownMenu}>
          {languages.map((language) => (
            <li
              key={language}
              onClick={() => handleLanguageChange(language)}
              className={styles.dropdownItem}
            >
              {language.toUpperCase()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { LanguageOptions };
