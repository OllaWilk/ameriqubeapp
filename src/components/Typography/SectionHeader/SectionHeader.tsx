import React from 'react';
import styles from './SectionHeader.module.scss';

interface Props {
  text: string;
  className?: string;
}

export const SectionHeader = ({ text, className }: Props) => {
  return <h2 className={`${styles.heading} ${className}`}>{text}</h2>;
};
