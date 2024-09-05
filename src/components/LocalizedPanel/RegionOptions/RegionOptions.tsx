import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RegionType } from '../../../types/navigation-types';
import { DropdownToggleButton } from '../../index';
import styles from '../DropdownOptions.module.scss';
import { OptionItem } from '../OptionItem/OptionItem';
import { useRegion } from '../../../context/RegionContext';

export const RegionOptions = () => {
  const { t } = useTranslation();
  const { region, changeRegion } = useRegion();
  const regions: RegionType[] = t('regions', { returnObjects: true });
  const [isRegionDropdownOpen, setRegionDropdownOpen] = useState(false);

  const handleRegionChange = (region: RegionType) => {
    changeRegion(region);
    setRegionDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <DropdownToggleButton
        label={region}
        onClick={() => setRegionDropdownOpen(!isRegionDropdownOpen)}
      />
      {isRegionDropdownOpen && (
        <ul className={styles.dropdownMenu}>
          {regions.map((region) => (
            <OptionItem<RegionType>
              key={region}
              select={region}
              onSelect={handleRegionChange}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
