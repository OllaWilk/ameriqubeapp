import React, { FC } from 'react';
import styles from './DropdownToggleButton.module.scss';

interface Props {
  label: string;
  onClick: () => void;
}

const DropdownToggleButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.dropdownToggle} onClick={onClick}>
      {label}
    </button>
  );
};

export { DropdownToggleButton };
