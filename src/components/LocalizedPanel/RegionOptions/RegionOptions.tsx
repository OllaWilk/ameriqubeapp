import React, { useState } from 'react';
import { Region, RegionType } from '../../../types/navigation-types';
import styles from '../DropdownOptions.module.scss';
import { useTranslation } from 'react-i18next';

const RegionOptions = () => {
  const { t } = useTranslation();
  const regions: RegionType[] = t('regions', { returnObjects: true });

  const [region, setRegion] = useState<string>(regions[0] || Region.EU);
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
