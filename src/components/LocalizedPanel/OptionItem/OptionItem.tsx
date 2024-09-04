import React, { ReactNode } from 'react';
import styles from './OptionItem.module.scss';

interface Props<T> {
  select: T;
  onSelect: (select: T) => void;
}

export const OptionItem = <T extends ReactNode>({
  select,
  onSelect,
}: Props<T>) => {
  const uppercase = typeof select === 'string' ? select.toUpperCase() : '';

  return (
    <li className={styles.dropdownItem} onClick={() => onSelect(select)}>
      {uppercase}
    </li>
  );
};
