import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RegionType } from '../../../types/navigation-types';
import { useRegion } from '../../../context/RegionContext';
import styles from '../DropdownOptions.module.scss';

const RegionOptions = () => {
  const { t } = useTranslation();
  const { region, setRegion } = useRegion();
  const regions: RegionType[] = t('regions', { returnObjects: true });
  const [isRegionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const handleRegionChange = (region: RegionType) => {
    console.log('Selected region:', region);
    setRegion(region);
    setRegionDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdownToggle}
        onClick={() => setRegionDropdownOpen(!isRegionDropdownOpen)}
      >
        {region}
      </button>
      {isRegionDropdownOpen && (
        <ul className={styles.dropdownMenu}>
          {regions.map((region) => (
            <li
              key={region}
              onClick={() => handleRegionChange(region)}
              className={styles.dropdownItem}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { RegionOptions };
