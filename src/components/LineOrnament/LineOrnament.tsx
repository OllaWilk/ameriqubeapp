import React, { FC } from 'react';
import styles from './LineOrnament.module.scss';

interface OrnamentProps {
  className?: string;
}

export const LineOrnament: FC<OrnamentProps> = ({ className }) => (
  <div className={`${styles.ornament} ${className}`}></div>
);
