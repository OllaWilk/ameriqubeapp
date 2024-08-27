import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguagesType } from '../../../types/navigation-types';
import styles from '../DropdownOptions.module.scss';

const LanguageOptions = () => {
  const { i18n, t } = useTranslation();
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const languages: LanguagesType[] = t('languages', { returnObjects: true });

  const handleLanguageChange = (language: LanguagesType) => {
    i18n.changeLanguage(language);
    setLanguageDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setLanguageDropdownOpen(!isLanguageDropdownOpen)}
      >
        {i18n.language.toUpperCase()}
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
