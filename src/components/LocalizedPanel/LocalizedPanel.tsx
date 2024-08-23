import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LocalizedPanel.module.scss';

const LocalizedPanel = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
      >
        <option value='en'>EN</option>
        <option value='pl'>PL</option>
        <option value='de'>DE</option>
      </select>
    </div>
  );
};

export { LocalizedPanel };
