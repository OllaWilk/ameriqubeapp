import React from 'react';
import styles from './Subtitle.module.scss';

interface Props {
  text: string;
  className?: string;
}

export const Subtitle = ({ text, className }: Props) => (
  <h3 className={`${styles.subtitle} ${className}`}>{text}</h3>
);
