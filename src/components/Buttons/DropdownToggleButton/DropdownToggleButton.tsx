import React, { FC } from 'react';
import styles from './DropdownToggleButton.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}

export const DropdownToggleButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.dropdownToggle} onClick={onClick}>
      {label}
    </button>
  );
};
