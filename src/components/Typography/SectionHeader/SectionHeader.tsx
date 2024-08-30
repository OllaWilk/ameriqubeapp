import React from 'react';
import styles from './SectionHeader.module.scss';

interface Props {
  text: string;
}

export const SectionHeader = ({ text }: Props) => {
  return <h2 className={styles.heading}>{text}</h2>;
};
