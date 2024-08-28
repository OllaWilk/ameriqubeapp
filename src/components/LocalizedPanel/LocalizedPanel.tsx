import React, { FC } from 'react';
import { LanguageOptions } from './LanguageOptions/LanguageOptions';
import { RegionOptions } from './RegionOptions/RegionOptions';
import styles from './LocalizedPanel.module.scss';

interface LocalizedPanelProps {
  className?: string;
}

const LocalizedPanel: FC<LocalizedPanelProps> = ({ className }) => {
  return (
    <div className={`${styles.panel} ${className}`}>
      <LanguageOptions />
      <RegionOptions />
    </div>
  );
};

export { LocalizedPanel };
