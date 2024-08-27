import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LocalizedPanel.module.scss';

interface LocalizedPanelProps {
  className?: string;
}

const LocalizedPanel: FC<LocalizedPanelProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };
  return (
    <div className={`${styles.selectContainer} ${className}`}>
      <select
        className={styles.select}
        onChange={handleLanguageChange}
        defaultValue={i18n.language}
      >
        <option value='en'>EN</option>
        <option value='pl'>PL</option>
        <option value='de'>DE</option>
      </select>
      <select className={styles.select} onChange={handleLanguageChange}>
        <option value='us'>US</option>
        <option value='eu'>EU</option>
        <option value='gb'>GB</option>
      </select>
    </div>
  );
};

export { LocalizedPanel };
